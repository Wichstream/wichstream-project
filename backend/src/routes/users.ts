import bcrypt from "bcrypt";

import express from "express";
import Joi from "joi";
import jwt from "jsonwebtoken";

import { getRepository } from "typeorm";

import { TokenInterface } from "src/interfaces/token.interface";
import { UserDto } from "src/interfaces/user.interface";

import { checkToken } from "../config/safeRoutes";
import ActiveSession from "../models/activeSession";
import User from "../models/user";

// eslint-disable-next-line new-cap
const router = express.Router();
// Route: <HOST>:PORT/api/users/

const userSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  username: Joi.string().min(4).max(60).optional(),
  password: Joi.string().required(),
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

  const userRepository = getRepository(User);

  userRepository.findOne({ email }).then((user) => {
    if (user) {
      res.json({ success: false, msg: "Email já cadastrado!" });
    } else {
      bcrypt.genSalt(10, (_err, salt) => {
        bcrypt.hash(password, salt).then((hash) => {
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

  const userRepository = getRepository(User);
  const activeSessionRepository = getRepository(ActiveSession);
  userRepository.findOne({ email }).then((user) => {
    if (!user) {
      return res.json({ success: false, msg: "Credenciais inválidas!" });
    }

    if (!user.password) {
      return res.json({ success: false, msg: "Necessário fornecer a senha!" });
    }

    bcrypt.compare(password, user.password, (_err2, isMatch) => {
      if (isMatch) {
        if (!process.env.SECRET) {
          throw new Error("Chave de segurança não fornecida!");
        }

        const token = jwt.sign(
          {
            id: user.id,
            username: user.username,
            email: user.email,
          },
          process.env.SECRET,
          {
            expiresIn: 86400, // 1 week
          }
        );

        const query = { userId: user.id, token };

        activeSessionRepository.save(query);
        // Delete the password (hash)
        (user as { password: string | undefined }).password = undefined;
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

router.post("/logout", checkToken, (req, res) => {
  const { token } = req.body;
  const activeSessionRepository = getRepository(ActiveSession);

  activeSessionRepository
    .delete({ token })
    .then(() => res.json({ success: true }))
    .catch(() => {
      res.json({ success: false, msg: "Token revogado!" });
    });
});

router.post("/checkSession", checkToken, (_req, res) => {
  res.json({ success: true });
});

router.post("/all", checkToken, (_req, res) => {
  const userRepository = getRepository(User);

  userRepository
    .find({})
    .then((users) => {
      users = users.map((item) => {
        const x = item;
        (x as { password: string | undefined }).password = undefined;
        return x;
      });
      res.json({ success: true, users });
    })
    .catch(() => res.json({ success: false }));
});

router.post("/edit", checkToken, (req, res) => {
  const { userID, username, email } = req.body;

  const userRepository = getRepository(User);

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
    } else {
      res.json({ success: false, msg: "Erro ao atualizar o usuário" });
    }
  });
});

// Used for tests (nothing functional)
router.get("/testme", (_req, res) => {
  res.status(200).json({ success: true, msg: "all good" });
});

router.get("/user", checkToken, (req, res) => {
  const token = String(req.headers.authorization)
  const tokenInterface = <TokenInterface>(jwt.decode(token));

  const userRepository = getRepository(User);

  userRepository.findOne({ id: tokenInterface.id }).then((user) => {
    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado!" });
    } else {

      const userDto: UserDto = {
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

export default router;