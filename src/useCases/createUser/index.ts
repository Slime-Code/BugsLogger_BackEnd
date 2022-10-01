import { CreateUserUseCase } from './CreateUserUseCase';
import userController from '../../controller/userController';
import { MongodbUserRepository } from '../../repositories/implemenations/mongodbUserRepository'
import { NodeMailerProvider } from '../../providers/implementations/nodeMailerProvider';

const mongodbUserRepository = new MongodbUserRepository()
// const nodeMailerProvider = new NodeMailerProvider()

const createUserUseCase = new CreateUserUseCase(mongodbUserRepository /*, nodeMailerProvider*/)

const createUserController = new userController(createUserUseCase)

export { createUserUseCase, createUserController }