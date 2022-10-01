import { IuserRepository } from '../userRepository'
import { User } from "../../entities/User";
import Users from "../../models/User";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

class MongodbUserRepository implements IuserRepository {

	async findByEmail(email: string): Promise<User> {
		const newUser = await Users.find({ email: email });
		return newUser;
	};

	async updateStatus(email: string): Promise<String> {
		const newUser = await Users.findOneAndUpdate({ email: email }, { status: 'confirmated' }, { new: true });
		return 'User updated with sucess!';
	};

	async findAll(): Promise<Object> {
		const user = await Users.find();
		return user;
	};

	async save(user: User): Promise<User> {
		const newUser = await Users.create(user);
		return newUser;
	};

	async login(email: string, password: string): Promise<Object> {
		const selectUser = await Users.findOne({ email: email })

		if (!selectUser) {
			return { status: 3, error: "Error! Email incorrecto. Try again." }
		}

		const senhaAndEmail = bcrypt.compareSync(password, selectUser.password);

		if (!senhaAndEmail) {
			return { status: 2, error: "Error! Password incorrecta. Try again." }
		}

		if (selectUser && selectUser.status !== "confirmated") {
			return { status: 2, error: "Error! User not Found. Try again." }
		} else {
			const token = jwt.sign(selectUser.toJSON(), "slimecode")
			return { status: 1, token: token };
		}
	};
}

export { MongodbUserRepository }