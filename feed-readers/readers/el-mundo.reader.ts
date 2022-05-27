import { NewsDto } from "../../lib/news.dto";
import { FeedReader } from "../core/feed-reader";

export class ElMundoReader extends FeedReader {
    public async obtainData(): Promise<NewsDto[]> {
        return []
    }
}