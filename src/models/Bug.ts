import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
 title: {
  type: String,
  required: true
 },
 description: {
  type: String,
  required: true
 },
 solution: {
  type: String,
  required: true
 },
 link: {
  type: Array,
  required: true
 },
 technologyId: {
  type: Schema.Types.ObjectId,
  ref: "Technologies",
  required: true
 },
 userId: {
  type: Schema.Types.ObjectId,
  ref: "Users",
  required: true
 }
},
 {
  timestamps: true
 });

export default model('Bugs', userSchema)