import { ElMundoReader } from "./readers/el-mundo.reader";
import { ElPaisReader } from "./readers/el-pais.reader";

const feedsToRead = [
    new ElMundoReader('https://elmundo.es'),
    new ElPaisReader('https://elpais.com')
]

async function main() {
    console.log("Hello");
    const data = await Promise.all(feedsToRead.map(feed => feed.obtainData()))
}

main()