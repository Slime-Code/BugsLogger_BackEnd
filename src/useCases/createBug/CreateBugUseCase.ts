import { Bug } from "../../entities/Bug";
import { IBugRepository } from "../../repositories/bugRepository";
import { ICreateBugRequestDTO } from "./CreateBugDTO";

class CreateBugUseCase {
 constructor(
  private bugRepository: IBugRepository,

 ) { }
 async execute(data: ICreateBugRequestDTO): Promise<Object> {

  const bug = new Bug(data);

  return await this.bugRepository.save(bug)

 }

 async find(): Promise<Object> {

  return await this.bugRepository.findAll()

 }
}

export { CreateBugUseCase }