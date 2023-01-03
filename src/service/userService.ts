import UserRepository from '../repository/userRepository';

export default class UserService {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  getUsers() {
    return this.userRepository.getUsers();
  }
}
