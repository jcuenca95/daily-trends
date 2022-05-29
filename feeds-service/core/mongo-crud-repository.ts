import { Document, Model } from "mongoose";
import { CrudRepository } from "./crud-repository";

export class MongoCrudRepository<T extends Document> extends CrudRepository {
    constructor(private model: Model<T>) {
        super()
    }
    public findAll(filter: Record<string, any>): Promise<any[]> {
        return this.model.find(filter).exec();
    }
    public findOne(id: string): Promise<any> {
        return this.model.findById(id).exec();
    }
    public async createOne(object: any): Promise<void> {
        const document = new this.model(object);
        await document.save()
    }
    public async updateOne(id: string, object: Partial<any>): Promise<void> {
        await this.model.findByIdAndUpdate(id, object);
    }
    public async deleteOne(id: string): Promise<void> {
        await this.model.findByIdAndDelete(id);
    }
}