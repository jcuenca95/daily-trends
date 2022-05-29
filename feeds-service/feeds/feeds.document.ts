import { Document } from "mongoose";

export interface FeedsDocument extends Document {
    title: string,
    body: string,
    image: string,
    source: string,
    publisher: string
}