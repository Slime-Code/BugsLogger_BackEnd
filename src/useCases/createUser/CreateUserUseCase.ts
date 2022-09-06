import { User } from "../../entities/User";
import { EmailProvider } from "../../providers/emailProvider";
import { IuserRepository } from "../../repositories/userRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

class CreateUserUseCase {
	constructor(
		private userRepository: IuserRepository,
		private emailProvider: EmailProvider

	) { }
	async execute(data: ICreateUserRequestDTO): Promise<Object> {
		// const userAlreadyExistis = await this.userRepository.findByEmail(data.email)

		// if (userAlreadyExistis) {
		// 	throw new Error('user Already Existis')
		// }
		const user = new User(data);

		await this.emailProvider.sendEmail(
			{
				to: {
					email: data.email
				},
				from: {
					email: 'josuerufino210@gmail.com'
				},
				subject: 'Bem vindo ao sistema',
				body: `<button> <a href= 'http://localhost:3333/update/${data.email}'>Verificar</a> </button>`
			})
		return await this.userRepository.save(user)
	}

	async find(): Promise<Object> {

		return await this.userRepository.findAll()

	}

	async updateStatus(data: ICreateUserRequestDTO): Promise<Object> {

		return await this.userRepository.updateStatus(data.email)

	}
}

export { CreateUserUseCase }