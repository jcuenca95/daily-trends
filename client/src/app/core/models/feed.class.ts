import { Feeds } from "../interfaces/feeds.interface";

export class Feed implements Feeds {
    _id?: string;
    title: string;
    body: string;
    image: string;
    source: string;
    publisher: string;
    constructor({
        _id,
        title,
        body,
        image,
        source,
        publisher
    }: Feeds) {
        this._id = _id;
        this.title = title;
        this.body = body;
        this.image = image;
        this.source = source;
        this.publisher = publisher;
    }

    get media(): string {
        const url = new URL(this.source);
        return url.hostname;
    }

    get abstract(): string {
        return `${this.body.slice(0, 140)}...`
    }
}