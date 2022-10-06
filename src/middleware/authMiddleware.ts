import { NextFunction, Request, Response } from "express";

import jwt from 'jsonwebtoken';
import logger from "../config/logger";

const authMiddleware = (req: Partial<Request>, res: Response, next: NextFunction) => {
	const token = req.header?.('authorization-token')
	if (!token) {
		logger.error('Token Not Found')
		return res.status(401).send("Acess Denied")
	}

	try {
		const verificarUsuario = jwt.verify(token, `${process.env.SECRET_KEY}`);
		req.user = verificarUsuario;
		next();
	} catch (error) {
		logger.error(`Invalid Token! ${error}`)
		res.status(401).send("Acess Denied" + error)
	}
}

export { authMiddleware }
