import dotenv from "dotenv";
dotenv.config();
const env = process.env;

import express from "express";
import cors from "cors";
import jwt from 'jsonwebtoken';

const JWT_SECRET = env.JWT_SECRET!;

import bcrypt from 'bcrypt';

import { createHandler } from 'graphql-http/lib/use/express';
const expressPlayground = require('graphql-playground-middleware-express').default
import schema from './schema-and-models/graphSchema';
import { verifyToken } from "./jwtMiddleware";

import mongoose from 'mongoose';
import { UserModel } from "./schema-and-models/mongoschema";

mongoose.connect(`mongodb://${env.db_uri}/${env.db_name}`);

const app = express();

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      throw new Error("All input is required");
    }

    const oldUser = await UserModel.findOne({ username });

    if (oldUser) {
      throw new Error("User Already Exist. Please Login");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user data to the database (use mongoose for this)
    const user = new UserModel({ username, password: hashedPassword });
    user.save()

    // Generate a JWT token
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ user, token });
  } catch (err) {
    res.status(500).json({ error: `${err}, 'Signup failed'` });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      throw new Error("All input is required");
    }

    const user = await UserModel.findOne({ username });

    if (!user) {
      throw new Error("user doesn't exist");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Generate a JWT token
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ user, token });
  } catch (err) {
    res.status(401).json({ error: `${err}, 'Authentication failed'` });
  }
});

const handler = createHandler({ schema })

app.all('/graphql', verifyToken, handler);
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(env.PORT, () => {
    console.log( `server running ${env.URL}:${env.PORT}/` );
    console.log( `press CTRL+C to stop server` );
});
