export interface NewsDto {
    title: string,
    body: string,
    image: string,
    publisher: string,
    source: string
}

export interface FeedReader {
    obtainData(): Promise<NewsDto[]>;
}