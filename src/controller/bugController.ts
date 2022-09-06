import { Request, Response } from 'express'
import { CreateBugUseCase } from '../useCases/createBug/CreateBugUseCase';

export default class bugController {
 constructor(
  private createBugUseCase: CreateBugUseCase
 ) { }
 async create(req: Request, res: Response): Promise<Response> {

  const { title, description, solution, link, technologyId, userId } = req.body;

  try {
   const newUser = await this.createBugUseCase.execute({
    title,
    description,
    solution,
    link,
    technologyId,
    userId
   })
   return res.status(201).json(newUser)
  }
  catch (err) {
   return res.status(400).json({
    message: err || 'Unexpected error'
   })
  }
 }

 async findAll(req: Request, res: Response): Promise<Response> {
  try {
   const newUser = await this.createBugUseCase.find()
   return res.status(200).json(newUser)
  }
  catch (err) {
   return res.status(400).json({
    message: err || 'Unexpected error'
   })
  }
 }
}
