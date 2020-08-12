const User = require("./User");
const Favorite = require("./Favorites");

User.hasMany(Favorite, {as: "favorite"});
Favorite.belongsTo(User, {as: "user"});

module.exports = { User, Favorite };