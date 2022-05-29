import { injectable } from "tsyringe";
import mongoose from 'mongoose';

import { FeedsSchema } from "./feeds.schema";
import { MongoCrudRepository } from "../core/mongo-crud-repository";
import { FeedsDocument } from "./feeds.document";

@injectable()
export class FeedsRepository extends MongoCrudRepository<FeedsDocument> {

    constructor() {
        super(mongoose.model<FeedsDocument>("feeds", FeedsSchema));
    }

}