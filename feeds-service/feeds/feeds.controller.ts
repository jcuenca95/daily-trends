import { autoInjectable } from "tsyringe";
import { Router, Request, Response } from 'express'; 

import { CrudController } from "../core/crud-controller.interface";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

@autoInjectable()
export class FeedsController extends CrudController {
    public getAll(req: Request, res: Response): void {
        res.send("Hello world")
    }
    public getOne(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }
    public createOne(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }
    public updateOne(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }
    public deleteOne(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }

}