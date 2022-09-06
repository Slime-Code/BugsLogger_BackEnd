import mongoose, { model } from 'mongoose';
import { User } from '../entities/User'
const { Schema } = mongoose;

const userSchema = new Schema({
 name: {
  type: String,
  required: true
 },
 email: {
  type: String,
  unique: true,
  required: true
 },
 password: {
  type: String,
  required: true
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

export default model('Users', userSchema)