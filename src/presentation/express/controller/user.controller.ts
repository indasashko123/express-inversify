import { IUserService } from "../../../app";
import { NextFunction, Request, Response } from "express";
import { inject } from 'inversify';
import { httpGet, httpPost,controller } from 'inversify-express-utils';
import { customMiddleware, InjectMiddleware } from "../middlewares";

@controller("/user")
export class UserController {
    
    
    constructor(
        @inject("IUserService") private readonly userService : IUserService)
        {}
    
    @httpGet("", customMiddleware, InjectMiddleware)
    async get(req : Request, res : Response, next : NextFunction) {
        try {
            const accs = await this.userService.getAll();
            return res.json(accs).status(200);    
        } catch(e) {
            next(e);
        }
    }

    @httpGet("/id", customMiddleware,InjectMiddleware)
    async getbyId(req : Request, res : Response, next : NextFunction) {
        try {
            const {id} = req.params;
            const accs = await this.userService.getById(Number(id));
            return res.json(accs).status(200);    
        } catch(e) {
            next(e);
        }
    }
    
    @httpPost("",customMiddleware,InjectMiddleware)
    async create(req : Request, res : Response, next : NextFunction) {
        try {
            const  {name} = req.body;
            const acc = await this.userService.create(name);
            return res.json(acc).status(201);     
        } catch(e) {
            next(e);
        }
    }
}