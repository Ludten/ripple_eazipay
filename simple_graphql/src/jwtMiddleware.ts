import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const env = process.env;
const JWT_SECRET = env.JWT_SECRET!;

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ error: 'Token not provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded: any) => {
    if (err) {
      return res.status(401).json({ error: 'Token is invalid' });
    }

    // Attach user information to the request for use in the route handler
    req.user = decoded;
    next();
  });
};
