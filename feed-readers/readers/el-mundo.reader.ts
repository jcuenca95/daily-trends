import axios from "axios";
import { load } from "cheerio";
import { FeedReader, NewsDto } from "../core/feed-reader";

export class ElMundoReader implements FeedReader {
    private url = 'https://elmundo.es';

    public async obtainData(): Promise<NewsDto[]> {
        const { data } = await axios.get<string>(this.url);
        const $ = load(data);
        const h2List = $('article');
        h2List.length = 5;
        const top5Links = h2List.map((i, el) => $(el).find('a').attr('href'));
        return Promise.all(top5Links.map((i, link) => this.readArticle(link)));
    }

    private async readArticle(link: string): Promise<NewsDto> {
        const { data } = await axios.get<string>(link);
        const $ = load(data);
        return {
            title: $('h1').text(),
            body: $('.ue-c-article__body > p').text(),
            image: $('article img').attr('src') || '',
            source: link,
            publisher: $('.ue-c-article__byline-name > a').text()
        }
    }
}