import { Request, Response } from 'express'
import { CreateUserUseCase } from '../useCases/createUser/CreateUserUseCase';
import bcrypt from 'bcryptjs'

export default class userController {
	constructor(
		private CreateUserUseCase: CreateUserUseCase
	) { }
	async create(req: Request, res: Response): Promise<Response> {

		const { name, email, typeUserId } = req.body;

		const password = bcrypt.hashSync(req.body.password)

		try {
			const newUser = await this.CreateUserUseCase.execute({
				name,
				email,
				password,
				typeUserId
			})
			return res.status(201).json(newUser)
		}
		catch (err) {
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
			return res.status(400).json({
				message: err || 'Unexpected error'
			})
		}
	}

	async findUsersAndUpdateStatus(req: Request, res: Response): Promise<Response> {

		const { email } = req.params;

		try {
			const newUser = await this.CreateUserUseCase.updateStatus({
				email
			})
			return res.status(200).json(newUser)
		}
		catch (err) {
			return res.status(400).json({
				message: err || 'Unexpected error'
			})
		}
	}

}
