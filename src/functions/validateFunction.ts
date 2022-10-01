import Joi, { ValidationResult } from '@hapi/joi'

const resgisteValidate = (data: Object): ValidationResult => {

	const schema = Joi.object({
		name: Joi.string().required().min(3).max(50),
		email: Joi.string().required().email(),
		password: Joi.string().required().min(6).max(80)
	})

	return schema.validate(data)
}

const loginValidate = (data: Object): ValidationResult => {

	const schema = Joi.object({
		email: Joi.string().required().email(),
		password: Joi.string().required().min(6).max(80)
	})

	return schema.validate(data)
}

export {
	resgisteValidate,
	loginValidate
}