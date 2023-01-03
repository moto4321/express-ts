import express, { Router, Application, Request, Response } from 'express';
import UserController from './controller/userController';
import UserService from './service/userService';
import UserRepository from './repository/userRepository';

class App {
  app: Application;

  constructor() {
    this.app = express();
  }
}

const app = new App().app;
const PORT = 8080;

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService, Router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.use('/api/users', userController.routes());

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
