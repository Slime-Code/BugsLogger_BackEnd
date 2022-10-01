import { IBugRepository } from '../bugRepository'
import { Bug } from "../../entities/Bug";
import Bugs from "../../models/Bug";

class MongodbBugRepository implements IBugRepository {

 async findAll(): Promise<Object> {
  const user = await Bugs.find().populate(["technologyId"]);
  return user;
 };

 async save(bug: Bug): Promise<Bug> {
  const newUser = await Bugs.create(bug);
  return newUser;
 };

}

export { MongodbBugRepository }