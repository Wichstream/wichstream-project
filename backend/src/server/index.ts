import 'dotenv/config';

import compression from 'compression';
import cors from 'cors';

import express from 'express';
import passport from 'passport';

import "reflect-metadata";

import initPassport from '../config/passport';
import routes from '../routes/users';

// Instantiate express
const server = express();
server.use(compression());

// Passport Config
initPassport(passport);
server.use(passport.initialize());

server.use(cors());
server.use(express.json());

// Initialize routes middleware
server.use('/api/users', routes);

export default server;
