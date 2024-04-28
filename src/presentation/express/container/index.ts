import { Container } from 'inversify';
import { IUserRepository, IUserService, UserService } from '../../../app';
import { UserRepository } from '../../../db';
import { UserController } from '../controller';
import { InjectMiddleware } from '../middlewares';


export const container = new Container();

container.bind<IUserRepository>('IUserRepository').to(UserRepository);
container.bind<IUserService>('IUserService').to(UserService);
container.bind<InjectMiddleware>(InjectMiddleware).toSelf();
container.bind<UserController>(UserController).toSelf();