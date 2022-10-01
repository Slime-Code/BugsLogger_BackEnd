import { Request, Response } from 'express'
import { CreateTechnologyUseCase } from '../useCases/createTechnology/CreateTechnologyUseCase';
import logger from '../config/logger'

export default class TechnologyController {
	constructor(
		private createTechnologyUseCase: CreateTechnologyUseCase
	) { }
	async create(req: Request, res: Response): Promise<Response> {

		const { name, categoryId } = req.body;

		try {
			const newUser = await this.createTechnologyUseCase.execute({
				name,
				categoryId
			})
			logger.info('New Tecnology created with sucess')
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
			const newUser = await this.createTechnologyUseCase.find()
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
