import axios from "axios";
import { resolveReaders } from "./readers-factory/readers-factory";


async function main() {
    if (!process.env.FEEDS_TO_READ) throw new Error('Env variable FEEDS_TO_READ must be filled');
    if (!process.env.URL_TO_POST) throw new Error('Env variable URL_TO_POST must be filled');

    const feedsToRead = resolveReaders(process.env.FEEDS_TO_READ);

    const data = await Promise.all(feedsToRead.map(feed => feed.obtainData()));
    const newsToPost = data.reduce((prev, current) => [...prev, ...current], []);
    await Promise.allSettled(newsToPost.map(news => axios.post(process.env.URL_TO_POST!, news)));
}

main()