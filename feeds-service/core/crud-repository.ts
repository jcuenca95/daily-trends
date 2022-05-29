export abstract class CrudRepository<T = any> {
    public abstract findAll(filter: Record<string, any>): Promise<T[]>;
    public abstract findOne(id: string): Promise<T>;
    public abstract createOne(object: T): Promise<void>;
    public abstract updateOne(id: string, object: Partial<T>): Promise<void>;
    public abstract deleteOne(id: string): Promise<void>;
}