import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import categoryController from '../../controller/categoryController';
import { CategoryRepository } from '../../repositories/implemenations/mongodbCategoryRepository'

const categoryRepository = new CategoryRepository()
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)

const createCategoryController = new categoryController(createCategoryUseCase)

export { createCategoryUseCase, createCategoryController }