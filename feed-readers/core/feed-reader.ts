import { NewsDto } from "../../lib/news.dto";

export interface FeedReader {
    obtainData(): Promise<NewsDto[]>;
}