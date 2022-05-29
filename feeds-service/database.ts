import { connect } from 'mongoose';

export function mongoConnect() {
    return new Promise((resolve, reject) => {
        connect(`mongodb://localhost:27017/feeds`,
            (err: any) => {
                if (err) {
                    reject(err)
                } else {
                    console.log("Successfully Connected!");
                    resolve(0)
                }
            }
        )

    })

}