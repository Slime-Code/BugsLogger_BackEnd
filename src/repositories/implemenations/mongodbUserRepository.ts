import { IuserRepository } from '../userRepository'
import { User } from "../../entities/User";
import Users from "../../models/User";
import bcrypt from 'bcryptjs'

class MongodbUserRepository implements IuserRepository {

 private users: User = Users;

 async findByEmail(email: string): Promise<User> {
  const newUser = await Users.find({ email: email });
  return newUser;
 };

 async updateStatus(email?: string): Promise<String> {
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
  const selectUser = await Users.find({ email: email });


  if (!selectUser) {
   return { status: 3, error: "Erro! Email incorrecto. Tente Novamente." }
  }

  const senhaAndEmail = bcrypt.compareSync(password, password)
  if (!senhaAndEmail) {
   return { status: 2, error: "Erro! Senha incorrecta. Tente Novamente." }
  }

  return { msg: 'User not found' }

 };
}

export { MongodbUserRepository }