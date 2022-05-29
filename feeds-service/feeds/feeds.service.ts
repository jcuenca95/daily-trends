import { autoInjectable } from "tsyringe";

import { CrudService } from "../core/crud-service";
import { FeedsRepository } from "./feeds.repository";

@autoInjectable()
export class FeedsService extends CrudService {
    constructor(feedRepository: FeedsRepository) {
        super(feedRepository)
    }
}