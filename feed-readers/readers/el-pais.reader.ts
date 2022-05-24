import { NewsDto } from "../../lib/news.dto";
import { FeedReader } from "../core/feed-reader";

export class ElPaisReader extends FeedReader {

    parse(data: any): NewsDto[] {
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