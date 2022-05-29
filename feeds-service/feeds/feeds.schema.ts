import mongoose from "mongoose";

export const FeedsSchema = new mongoose.Schema(
    {
        title: String,
        body: String,
        image: String,
        source: String,
        publisher: String,
    },
    {
        timestamps: true
    }
);