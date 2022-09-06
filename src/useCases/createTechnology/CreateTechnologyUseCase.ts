import { Technology } from "../../entities/Technology";
import { ITechnologyRepository } from "../../repositories/technologyRepository";
import { ICreateTchnologyRequestDTO } from "./CreateTechnologyDTO";

class CreateTechnologyUseCase {
 constructor(
  private technologyRepository: ITechnologyRepository,

 ) { }
 async execute(data: ICreateTchnologyRequestDTO): Promise<Object> {

  const bug = new Technology(data);

  return await this.technologyRepository.save(bug)

 }

 async find(): Promise<Object> {

  return await this.technologyRepository.findAll()

 }
}

export { CreateTechnologyUseCase }