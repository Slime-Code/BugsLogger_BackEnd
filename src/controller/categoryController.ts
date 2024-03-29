import { Request, Response } from 'express'
import { CreateCategoryUseCase } from '../useCases/createCategory/CreateCategoryUseCase';
import logger from '../config/logger'

export default class categoryController {
	constructor(
		private createCategoryUseCase: CreateCategoryUseCase
	) { }
	async create(req: Request, res: Response): Promise<Response> {

		const { name } = req.body;

		try {
			const newUser = await this.createCategoryUseCase.execute({
				name
			})
			logger.info('New Category created with sucess')
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
			const newUser = await this.createCategoryUseCase.find()
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
