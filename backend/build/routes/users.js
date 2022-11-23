"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const express_1 = __importDefault(require("express"));
const joi_1 = __importDefault(require("joi"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const typeorm_1 = require("typeorm");
const safeRoutes_1 = require("../config/safeRoutes");
const activeSession_1 = __importDefault(require("../models/activeSession"));
const user_1 = __importDefault(require("../models/user"));
// eslint-disable-next-line new-cap
const router = express_1.default.Router();
// Route: <HOST>:PORT/api/users/
const userSchema = joi_1.default.object().keys({
    email: joi_1.default.string().email().required(),
    username: joi_1.default.string().min(4).max(60).optional(),
    password: joi_1.default.string().required(),
});
router.post("/register", (req, res) => {
    // Joy Validation
    const result = userSchema.validate(req.body);
    if (result.error) {
        res.status(422).json({
            success: false,
            msg: `Erro de: ${result.error.details[0].message}`,
        });
        return;
    }
    const { username, email, password } = req.body;
    const userRepository = (0, typeorm_1.getRepository)(user_1.default);
    userRepository.findOne({ email }).then((user) => {
        if (user) {
            res.json({ success: false, msg: "Email já cadastrado!" });
        }
        else {
            bcrypt_1.default.genSalt(10, (_err, salt) => {
                bcrypt_1.default.hash(password, salt).then((hash) => {
                    const query = {
                        username,
                        email,
                        password: hash,
                    };
                    userRepository.save(query).then((u) => {
                        res.json({
                            success: true,
                            userID: u.id,
                            msg: "Usuário já cadastrado!",
                        });
                    });
                });
            });
        }
    });
});
router.post("/login", (req, res) => {
    // Joy Validation
    const result = userSchema.validate(req.body);
    if (result.error) {
        res.status(422).json({
            success: false,
            msg: `Erro de: ${result.error.details[0].message}`,
        });
        return;
    }
    const { email } = req.body;
    const { password } = req.body;
    const userRepository = (0, typeorm_1.getRepository)(user_1.default);
    const activeSessionRepository = (0, typeorm_1.getRepository)(activeSession_1.default);
    userRepository.findOne({ email }).then((user) => {
        if (!user) {
            return res.json({ success: false, msg: "Credenciais inválidas!" });
        }
        if (!user.password) {
            return res.json({ success: false, msg: "Necessário fornecer a senha!" });
        }
        bcrypt_1.default.compare(password, user.password, (_err2, isMatch) => {
            if (isMatch) {
                if (!process.env.SECRET) {
                    throw new Error("Chave de segurança não fornecida!");
                }
                const token = jsonwebtoken_1.default.sign({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                }, process.env.SECRET, {
                    expiresIn: 86400, // 1 week
                });
                const query = { userId: user.id, token };
                activeSessionRepository.save(query);
                // Delete the password (hash)
                user.password = undefined;
                return res.json({
                    success: true,
                    token,
                    user,
                });
            }
            return res.json({ success: false, msg: "Credenciais inválidas!" });
        });
    });
});
router.post("/logout", safeRoutes_1.checkToken, (req, res) => {
    const { token } = req.body;
    const activeSessionRepository = (0, typeorm_1.getRepository)(activeSession_1.default);
    activeSessionRepository
        .delete({ token })
        .then(() => res.json({ success: true }))
        .catch(() => {
        res.json({ success: false, msg: "Token revogado!" });
    });
});
router.post("/checkSession", safeRoutes_1.checkToken, (_req, res) => {
    res.json({ success: true });
});
router.post("/all", safeRoutes_1.checkToken, (_req, res) => {
    const userRepository = (0, typeorm_1.getRepository)(user_1.default);
    userRepository
        .find({})
        .then((users) => {
        users = users.map((item) => {
            const x = item;
            x.password = undefined;
            return x;
        });
        res.json({ success: true, users });
    })
        .catch(() => res.json({ success: false }));
});
router.post("/edit", safeRoutes_1.checkToken, (req, res) => {
    const { userID, username, email } = req.body;
    const userRepository = (0, typeorm_1.getRepository)(user_1.default);
    userRepository.find({ id: userID }).then((user) => {
        if (user.length === 1) {
            const query = { id: user[0].id };
            const newvalues = { username, email };
            userRepository
                .update(query, newvalues)
                .then(() => {
                res.json({ success: true });
            })
                .catch(() => {
                res.json({
                    success: false,
                    msg: "Erro encontrado. Contate o Administrador da plataforma!",
                });
            });
        }
        else {
            res.json({ success: false, msg: "Erro ao atualizar o usuário" });
        }
    });
});
// Used for tests (nothing functional)
router.get("/testme", (_req, res) => {
    res.status(200).json({ success: true, msg: "all good" });
});
router.get("/user", safeRoutes_1.checkToken, (req, res) => {
    const token = String(req.headers.authorization);
    const tokenInterface = (jsonwebtoken_1.default.decode(token));
    const userRepository = (0, typeorm_1.getRepository)(user_1.default);
    userRepository.findOne({ id: tokenInterface.id }).then((user) => {
        if (!user) {
            res.status(404).json({ message: "Usuário não encontrado!" });
        }
        else {
            const userDto = {
                id: user.id,
                username: user.username,
                description: user.description,
                contact: user.contact,
                country: user.country,
                facebook: user.facebook,
                twitter: user.twitter,
                instagram: user.instagram,
                email: user.email,
                date: user.date
            };
            res.status(200).json({ userDto });
        }
    });
});
exports.default = router;
//# sourceMappingURL=users.js.map