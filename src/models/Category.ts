import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
 name: {
  type: String,
  required: true
 }
},
 {
  timestamps: true
 });

export default model('Categories', userSchema)