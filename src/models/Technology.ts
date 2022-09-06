import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
 name: {
  type: String,
  required: true
 },
 categoryId: {
  type: Schema.Types.ObjectId,
  ref: "Categories",
  required: true
 }
},
 {
  timestamps: true
 });

export default model('Technologies', userSchema)