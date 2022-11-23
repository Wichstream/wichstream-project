"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
const typeorm_1 = require("typeorm");
const activeSession_1 = __importDefault(require("../models/activeSession"));
// eslint-disable-next-line import/prefer-default-export
const checkToken = (req, res, next) => {
    const token = String(req.headers.authorization || req.body.token);
    const activeSessionRepository = (0, typeorm_1.getRepository)(activeSession_1.default);
    activeSessionRepository.find({ token }).then((session) => {
        console.log(token);
        console.log(session);
        if (session.length === 1) {
            return next();
        }
        return res.json({ success: false, msg: "User is not logged on" });
    });
};
exports.checkToken = checkToken;
//# sourceMappingURL=safeRoutes.js.map