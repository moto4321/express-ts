export default class UserRepository {
  users = [
    { id: 1, name: 'loki', age: 28 },
    { id: 2, name: 'wooseok', age: 20 },
  ]

  getUsers() {
    return this.users;
  }
}