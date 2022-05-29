import { Request, Response, Router } from 'express';
import { Controller } from "./controller.interface";
import { CrudService } from './crud-service';

export abstract class CrudController<T> implements Controller {
    protected router: Router;

    constructor(private service: CrudService<T>) {
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

    public async getAll(req: Request, res: Response): Promise<void> {
        const result = await this.service.findAll({});
        res.send(result).status(200)
    }
    public async getOne(req: Request, res: Response): Promise<void> {
        const result = await this.service.findOne(req.params.id);
        if (!result) {
            res.send().status(404);
        } else {
            res.send(result).status(200);
        }
    }
    public async createOne(req: Request, res: Response): Promise<void> {
        try {
            await this.service.createOne(req.body);
            res.send().status(201)
        } catch (error) {
            res.send(error).status(500)
        }
    }
    public async updateOne(req: Request, res: Response): Promise<void> {
        try {
            await this.service.updateOne(req.params.id, req.body);
            res.send().status(200)
        } catch (error) {
            res.send(error).status(500)
        }
    }
    public async deleteOne(req: Request, res: Response): Promise<void> {
        try {
            await this.service.deleteOne(req.params.id);
            res.send().status(200)
        } catch (error) {
            res.send(error).status(500)
        }
    }
}