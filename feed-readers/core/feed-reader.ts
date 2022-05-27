import { NewsDto } from "../../lib/news.dto";

export abstract class FeedReader {
    constructor(private _url: string) {}

    get url() {
        return this._url;
    }

    public abstract obtainData(): Promise<NewsDto[]>;
}