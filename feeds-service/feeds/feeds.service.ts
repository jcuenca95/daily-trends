import { autoInjectable } from "tsyringe";

import { CrudService } from "../core/crud-service";
import { FeedsRepository } from "./feeds.repository";

@autoInjectable()
export class FeedsService extends CrudService {
    constructor(feedRepository: FeedsRepository) {
        super(feedRepository)
    }

    public findAll(filter: Record<string, any>): Promise<any[]> {
        if (filter.day) {
            const startDay = new Date(filter.day);
            startDay.setHours(0, 0, 0, 0);
            const endDay = new Date(startDay);
            endDay.setDate(endDay.getDate() + 1);
            filter.createdAt = {
                $gte: startDay,
                $lte: endDay
            }
        }
        return this.repository.findAll(filter);
    }

}