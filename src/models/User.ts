import mongoose, { Document, model } from 'mongoose';
const { Schema } = mongoose;


interface IUser extends Document {
	name: string,
	email: string,
	password: string;
	status: string;
	typeUserId: Number;
}

const userSchema = new Schema<IUser>({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 50
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		maxlength: 80
	},
	status: {
		type: String,
		default: "waiting",
		required: true
	},
	typeUserId: {
		type: Number,
		default: 1,
		required: true
	}
},
	{
		timestamps: true
	});

userSchema.methods.findPassword = function () {
	return mongoose.model('Users').find({ password: this.password });
}

export default model<IUser>('Users', userSchema)