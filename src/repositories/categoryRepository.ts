import { Category } from "../entities/Category";

interface ICategoryRepository {
 save(category: Category): Promise<Category>;
 findAll(): Promise<Object>;
}

export { ICategoryRepository }