import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/categoryRepository";
import { ICreateCategoryRequestDTO } from "./CreateCategoryDTO";

class CreateCategoryUseCase {
 constructor(
  private categoryRepository: ICategoryRepository,

 ) { }
 async execute(data: ICreateCategoryRequestDTO): Promise<Object> {

  const bug = new Category(data);

  return await this.categoryRepository.save(bug)

 }

 async find(): Promise<Object> {

  return await this.categoryRepository.findAll()

 }
}

export { CreateCategoryUseCase }