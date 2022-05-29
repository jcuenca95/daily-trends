import { autoInjectable } from "tsyringe";
import { Request, Response } from 'express';

import { CrudController } from "../core/crud-controller";
import { FeedsService } from "./feeds.service";

@autoInjectable()
export class FeedsController extends CrudController<any>{

    constructor(feedsService: FeedsService) {
        super(feedsService);
    }

}