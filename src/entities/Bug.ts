
interface IBug {
	title: string,
	description: string,
	solution: string,
	link: Array<string>,
	technologyId: string,
	userId: string
}

class Bug {
	constructor(bug: IBug) {
		Object.assign(this, bug)
	}
}

export { Bug };
