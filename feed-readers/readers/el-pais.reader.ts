import { load } from 'cheerio'
import axios from 'axios'

import { NewsDto } from "../../lib/news.dto";
import { FeedReader } from "../core/feed-reader";

export class ElPaisReader extends FeedReader {
    
    public async obtainData(): Promise<NewsDto[]> {
        const { data } = await axios.get<string>(this.url);
        const $ = load(data);
        const h2List = $('h2');
        h2List.length = 5;
        const top5Links = h2List.map((i, el) => `${this.url}${$(el).find('a').attr('href')}`);
        return Promise.all(top5Links.map((i, link) => this.readArticle(link)));
    }

    private async readArticle(link: string): Promise<NewsDto> {
        const { data } = await axios.get<string>(link);
        const $ = load(data);
        return {
            body: $('#fusion-app > article > div.a_c.clearfix > p').text(),
            publisher: $('#fusion-app > article > div.a_md._g._g-xs > div > div.a_md_a > a').text(),
            source: link,
            image: $('article img').attr('src') || '',
            title: $('h1').text()
        }
    }    
}