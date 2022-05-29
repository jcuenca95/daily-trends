import { injectable } from "tsyringe";
import mongoose from 'mongoose';

import { FeedsSchema } from "./feeds.schema";
import { MongoCrudRepository } from "../core/mongo-crud-repository";

@injectable()
export class FeedsRepository extends MongoCrudRepository<any> {

    constructor() {
        super(mongoose.model<any>("feeds", FeedsSchema));
    }

}