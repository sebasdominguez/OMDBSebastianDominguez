const S = require('sequelize');
const crypto = require('crypto'); // The crypto module provides a way of handling encrypted data. | https://www.w3schools.com/nodejs/ref_crypto.asp
const db = require('../config/db');
const User = db.define('users', {
  email: {
    type: S.STRING,
    allowNull: false,
  },
  password: {
    type: S.STRING,
    allowNull: false,
  },
  name: {
    type: S.STRING,
    allowNull: false,
  },
  salt: {
    type: S.STRING, // a salt is random data that is used as an additional input to a one-way function that "hashes" data
  }
})

User.addHook('beforeCreate', (user) => {
  user.salt = crypto.randomBytes(20).toString('hex');
  user.password = user.hashPassword(user.password);
})
User.prototype.hashPassword = function (password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
}

User.prototype.validPassword = function (password) {
  return this.password === this.hashPassword(password);
}

module.exports = User