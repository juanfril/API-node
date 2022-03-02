require('../DB/mongo');
import User from '../models/User';
import bodyParser from 'body-parser';
import { Router } from 'express';
import handleErrors from '../middlewares/handleErrors';
import notFound from '../middlewares/notFound';

const users = [];

const router = Router();
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('<h1>hello world</h1>');
});

router.get('/users', (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  //res.json(users);
});

router.get('/users/:id', (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
  /* const user = users.find((user) => user.id === Number(id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      message: 'User not found',
    });
  } */
});

//post new user
router.post('/users', (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  /* const { name, email, password, avatar, whatsapp, bio } = req.body;
  const id = users.length + 1;
  const user = {
    id,
    name,
    email,
    password,
    avatar,
    whatsapp,
    bio,
  };
  users.push(user);
  res.json(user); */
});

router.put('/users/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, email, password, avatar, whatsapp, bio } = req.body;
  User.findByIdAndUpdate(
    id,
    {
      name,
      email,
      password,
      avatar,
      whatsapp,
      bio,
    },
    { new: true }
  )
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
  /* const user = users.find((user) => user.id === Number(id));
  if (user) {
    user.name = name;
    user.email = email;
    user.password = password;
    user.avatar = avatar;
    user.whatsapp = whatsapp;
    user.bio = bio;
    res.json(user);
  } else {
    res.status(404).json({
      message: 'User not found',
    });
  } */
});

router.delete('/users/:id', (req, res, next) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
  /* const userIndex = users.findIndex((user) => user.id === Number(id));
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({
      message: 'User deleted',
    });
  } else {
    res.status(404).json({
      message: 'User not found',
    });
  } */
});

router.use(notFound);
router.use(handleErrors);

export default router;
