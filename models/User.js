export default class User {
  constructor(id, username, email, password_hash, createdAt) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password_hash = password_hash;
    this.createdAt = createdAt;
  }
}
