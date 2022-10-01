import { Request, Response } from 'express'
import { CreateBugUseCase } from '../useCases/createBug/CreateBugUseCase';
import logger from '../config/logger'

export default class bugController {
	constructor(
		private createBugUseCase: CreateBugUseCase
	) { }
	async create(req: Request, res: Response): Promise<Response> {

		const { title, description, solution, link, technologyId } = req.body;
		const { ...userId } = req.user
		try {
			const newUser = await this.createBugUseCase.execute({
				title,
				description,
				solution,
				link,
				technologyId,
				userId
			})
			logger.info('New Bug created with sucess')
			return res.status(201).json(newUser)
		}
		catch (err) {
			logger.error(err)
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
			logger.error(err)
			return res.status(400).json({
				message: err || 'Unexpected error'
			})
		}
	}
}
