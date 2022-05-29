import { CrudRepository } from "./crud-repository";

export class CrudService<T = any> {
    constructor(protected repository: CrudRepository<T>) { }

    public findAll(filter: Record<string, any>) {
        return this.repository.findAll(filter);
    }

    public findOne(id: string) {
        return this.repository.findOne(id);
    }

    public createOne(body: T) {
        return this.repository.createOne(body);
    }

    public updateOne(id: string, body: Partial<T>) {
        return this.repository.updateOne(id, body);
    }

    public deleteOne(id: string) {
        return this.repository.deleteOne(id);
    }
}