import { Request, Response, NextFunction } from 'express';

export const customMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('Применяется customMiddleware');
        next();
    } catch(e) {
        next(e);  
    }
}