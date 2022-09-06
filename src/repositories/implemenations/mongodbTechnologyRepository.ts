import { ITechnologyRepository } from '../technologyRepository'
import { Technology } from "../../entities/Technology";
import Technologies from "../../models/Technology";

class MongodbTechnologyRepository implements ITechnologyRepository {

 async findAll(): Promise<Object> {
  const user = await Technologies.find().populate("categoryId");
  return user;
 };

 async save(technology: Technology): Promise<Technology> {
  const newUser = await Technologies.create(technology);
  return newUser;
 };

}

export { MongodbTechnologyRepository }