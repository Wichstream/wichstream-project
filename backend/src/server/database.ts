import { ConnectionOptions } from 'typeorm';
import User from '../models/user'
import ActiveSession from '../models/activeSession'

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5433,
  username: process.env.POSTGRES_USER || "wichstream",
  password: process.env.POSTGRES_PASSWORD || "@wich2022stream!",
  database: process.env.POSTGRES_DB || "wichstreamDB",
  entities: [User, ActiveSession],
  synchronize: true,
};

export default config;