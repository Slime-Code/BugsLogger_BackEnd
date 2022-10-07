import { ICategoryRepository } from '../categoryRepository'
import { Category } from "../../entities/Category";
import Categories from "../../models/Category";

class CategoryRepository implements ICategoryRepository {

 async findAll(): Promise<Object> {
  const categories = await Categories.find();
  return categories;
 };

 async save(category: Category): Promise<Category> {
  const newUser = await Categories.create(category);
  return newUser;
 };

}

export { CategoryRepository }