interface IUser {
	name: string,
	email: string,
	password: string;
	status?: string;
	typeUserId: Number;
}

class User {
	constructor(user: IUser) {
		Object.assign(this, user)
	}
}

export { User };
