import { CreateTechnologyUseCase } from './CreateTechnologyUseCase';
import TechnologyController from '../../controller/TechnologyController';
import { MongodbTechnologyRepository } from '../../repositories/implemenations/mongodbTechnologyRepository'

const technologyRepository = new MongodbTechnologyRepository()
const createTechnologyUseCase = new CreateTechnologyUseCase(technologyRepository)

const createTechnologyController = new TechnologyController(createTechnologyUseCase)

export { createTechnologyUseCase, createTechnologyController }