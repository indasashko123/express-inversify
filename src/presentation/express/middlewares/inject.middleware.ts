import { inject, injectable } from "inversify"
import { IUserService } from "../../../app"
import { NextFunction, Request, Response } from "express"
import { BaseMiddleware } from "inversify-express-utils";


@injectable()
export class InjectMiddleware extends BaseMiddleware {
    constructor(@inject("IUserService")private readonly userService : IUserService) {
        super();
    }
   
    async handler(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
           console.log(this.userService); 
           next();
        }catch(e) {
            next(e);
        }
    }
    
 
    
    
}