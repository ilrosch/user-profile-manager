class UserProfileManager {
  constructor() {
    this.users = [];
  }

  addUser(userInfo) {
    this.users.push({ id: this.users.length + 1, ...userInfo });
  }

  removeUser(userId) {
    this.users = this.users.filter(({ id }) => userId !== id);
  }

  updateUser(userId, newInfo) {
    const user = this.users.find(({ id }) => userId === id);
    if (!user) { return; }
    this.users[userId - 1] = { ...user, ...newInfo };
  }

  findUserByName(userName) {
    return this.users.filter(({ name }) => name.toLowerCase().includes(userName.toLowerCase()));
  }

  getAllUsers() {
    return this.users;
  }
}
