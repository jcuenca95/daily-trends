import mongoose from "mongoose";

export const FeedsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        source: {
            type: String,
            required: true
        },
        publisher: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);