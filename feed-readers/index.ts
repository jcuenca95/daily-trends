import { resolveReaders } from "./readers-factory/readers-factory";


async function main() {
    if (!process.env.FEEDS_TO_READ) throw new Error('Env variable FEEDS_TO_READ must be filled');

    const feedsToRead = resolveReaders(process.env.FEEDS_TO_READ);

    const data = await Promise.all(feedsToRead.map(feed => feed.obtainData()));

    data.forEach(feedData => feedData.forEach(newData => console.log(JSON.stringify(newData))));
}

main()