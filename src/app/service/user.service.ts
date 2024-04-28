import { IUserService,IUserRepository } from "../interfaces";
import { User } from "../../domain";
import { inject, injectable } from "inversify";


@injectable()
export class UserService implements IUserService {
    
    constructor(
       @inject("IUserRepository") private readonly userRepository : IUserRepository
    ) {
    }

    async getAll(): Promise<User[]> {
        return await this.userRepository.getAll();
    }
    async getById(id: number): Promise<User> {
        return await this.userRepository.getById(id);
    }
    async create(name: string): Promise<User> {
        return await this.userRepository.create(name);
    }
    async delete(id: number): Promise<void> {
        return await this.userRepository.delete(id);
    }
}