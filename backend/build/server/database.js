"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const activeSession_1 = __importDefault(require("../models/activeSession"));
const config = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT) || 5433,
    username: process.env.POSTGRES_USER || "wichstream",
    password: process.env.POSTGRES_PASSWORD || "@wich2022stream!",
    database: process.env.POSTGRES_DB || "wichstreamDB",
    entities: [user_1.default, activeSession_1.default],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=database.js.map