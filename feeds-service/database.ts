import { connect } from 'mongoose';

export function mongoConnect() {
    const host = process.env.MONGO_HOST || "localhost:27017";
    return new Promise((resolve, reject) => {
        connect(`mongodb://${host}/feeds`,
            (err: any) => {
                if (err) {
                    reject(err)
                } else {
                    console.log("Successfully Connected!");
                    resolve(0)
                }
            }
        );

    });
}