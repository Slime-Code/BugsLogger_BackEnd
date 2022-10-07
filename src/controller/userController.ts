import { Request, Response } from 'express'
import { CreateUserUseCase } from '../useCases/createUser/CreateUserUseCase';
import { resgisteValidate, loginValidate } from '../functions/validateFunction'
import logger from '../config/logger'
import bcrypt from 'bcryptjs'

export default class userController {
	constructor(
		private CreateUserUseCase: CreateUserUseCase
	) { }
	async create(req: Request, res: Response): Promise<Response> {

		const { error } = resgisteValidate(req.body)
		if (error) {
			return res.status(400).send(error.message)
		}
		const { name, email, typeUserId } = req.body;

		const password = bcrypt.hashSync(req.body.password)

		try {

			const newUser = await this.CreateUserUseCase.execute(
				{ name, email, password, typeUserId }
			)
			logger.info('New User created with sucess')
			return res.status(201).json(newUser)
		}
		catch (err) {
			logger.error(err)
			return res.status(400).json({
				message: err || 'Unexpected error'
			})
		}
	}

	async findUsers(req: Request, res: Response): Promise<Response> {
		try {
			const newUser = await this.CreateUserUseCase.find()
			return res.status(200).json(newUser)
		}
		catch (err) {
			logger.error(err)
			return res.status(400).json({
				message: err || 'Unexpected error'
			})
		}
	}

	async findUsersAndUpdateStatus(req: Request, res: Response): Promise<Response> {

		try {
			const newUser = await this.CreateUserUseCase.updateStatus(
				req.params.email
			)
			return res.status(200).json(newUser)
		}
		catch (err) {
			logger.error(err)
			return res.status(400).json({
				message: err || 'Unexpected error'
			})
		}
	}

	async login(req: Request, res: Response): Promise<Response> {

		const { error } = loginValidate(req.body)
		if (error) {
			return res.status(400).send(error.message)
		}

		try {
			const newUser = await this.CreateUserUseCase.login(
				req.body.email,
				req.body.password
			)
			return res.status(200).json(newUser)

		}
		catch (err) {
			logger.error(err)
			return res.status(409).json({
				message: err || 'Unexpected error'
			})
		}
	}

}
