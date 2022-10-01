import { User } from "../entities/User";

interface IuserRepository {
	findByEmail(email?: string): Promise<User>;
	updateStatus(email: string): Promise<String>;
	save(user: User): Promise<User>;
	findAll(): Promise<Object>;
	login(email: string, password: string): Promise<Object>;
}

export { IuserRepository }