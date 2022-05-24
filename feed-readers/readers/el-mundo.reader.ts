import { NewsDto } from "../../lib/news.dto";
import { FeedReader } from "../core/feed-reader";

export class ElMundoReader extends FeedReader {

    public parse(data: any): NewsDto[] {
        return [
            {
                body: "",
                image: "",
                publisher: "",
                source: "",
                title: ""
            }
        ]
    }
}