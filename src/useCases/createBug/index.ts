import { CreateBugUseCase } from './CreateBugUseCase';
import bugController from '../../controller/bugController';
import { MongodbBugRepository } from '../../repositories/implemenations/mongodbBugRepository'

const mongodbBugRepository = new MongodbBugRepository()
const createBugUseCase = new CreateBugUseCase(mongodbBugRepository)

const createBugController = new bugController(createBugUseCase)

export { createBugUseCase, createBugController }