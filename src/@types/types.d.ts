import * as http from 'http';
import Users from '../models/User'
// module augmentation
declare module 'express-serve-static-core' {
 export interface Request extends http.IncomingMessage, Express.Request {
  user?: Users;
 }
}