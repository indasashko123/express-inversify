import { User } from "../../../domain";

export interface IUserRepository {
    getAll() : Promise<User[]>;
    getById(id : number) : Promise<User>;
    create(name : string) : Promise<User>;
    delete(id : number) : Promise<void>;
}