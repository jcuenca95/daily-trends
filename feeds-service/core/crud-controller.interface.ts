import { Request, Response, Router } from 'express';
import { Controller } from "./controller.interface";

export abstract class CrudController implements Controller {
    protected router: Router;

    constructor() {
        this.router = Router()
    }

    routes() {
        this.router.get('/', (req, res) => this.getAll(req, res));
        this.router.get('/:id', (req, res) => this.getOne(req, res));
        this.router.post('/', (req, res) => this.createOne(req, res));
        this.router.put('/', (req, res) => this.updateOne(req, res));
        this.router.delete('/', (req, res) => this.deleteOne(req, res));
        return this.router;
    }

    public abstract getAll(req: Request, res: Response): void;
    public abstract getOne(req: Request, res: Response): void;
    public abstract createOne(req: Request, res: Response) : void;
    public abstract updateOne(req: Request, res: Response) : void;
    public abstract deleteOne(req: Request, res: Response) : void;
}