import axios from 'axios'

import { NewsDto } from "../../lib/news.dto";

export abstract class FeedReader {
    constructor(private _url: string) {}

    get url() {
        return this._url;
    }

    async obtainData(): Promise<NewsDto[]> {
        const { data } = await axios.get(this.url);
        console.log(this.url, data.toString())
        return this.parse(data)
    }

    public abstract parse(data: any): NewsDto[];
}