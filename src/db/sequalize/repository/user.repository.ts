import { inject, injectable } from "inversify";
import { IUserRepository } from "../../../app";
import { User } from "../../../domain";
import { UserModel } from "../models";


@injectable()
export class UserRepository implements IUserRepository {

    async getAll(): Promise<User[]> {
        return await UserModel.findAll();
    }
    async getById(id: number): Promise<User> {
        return await UserModel.findByPk(id);
    }
    async create(name: string): Promise<User> {
        return await UserModel.create({name});
    }
    async delete(id: number): Promise<void> {
        await UserModel.destroy({where : {id}});
    }
}