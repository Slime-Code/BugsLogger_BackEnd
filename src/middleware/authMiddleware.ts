import { NextFunction, Request, Response } from "express";

import jwt from 'jsonwebtoken';

const authMiddleware = (req: Partial<Request>, res: Response, next: NextFunction) => {
	const token = req.header?.('authorization-token')
	if (!token) {
		return res.status(401).send("Acess Denied")
	}

	try {
		const verificarUsuario = jwt.verify(token, "slimecode");
		req.user = verificarUsuario;
		next();
	} catch (error) {
		res.status(401).send("Acess Denied" + error)
	}
}

export { authMiddleware }
