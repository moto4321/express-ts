import { Router } from 'express';
import UserService from '../service/userService';

export default class UserController {
  userService: UserService;
  router: Router;

  constructor(userService: UserService, Router: any) {
    this.userService = userService;
    this.router = new Router();
  }

  getUsersRoute() {
    return this.userService.getUsers();
  }

  routes() {
    this.router.get('/', (req, res) => {
      return res.send(this.getUsersRoute());
    });
    return this.router;
  }
}
