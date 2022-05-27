import { FeedReader } from "../core/feed-reader";
import { ElMundoReader } from "../readers/el-mundo.reader";
import { ElPaisReader } from "../readers/el-pais.reader";

export const AvailableReaders: Record<string, FeedReader> = {
    'https://elmundo.es': new ElMundoReader,
    'https://elpais.com': new ElPaisReader
}

export const resolveReaders = (feedsToRead: string) => {
    const feeds = feedsToRead.split(',');
    return feeds
        .filter(feed => AvailableReaders[feed])
        .map(feed => AvailableReaders[feed])
}
