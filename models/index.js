import db from "../config/database.js";
import Book from "./book.model.js";
import Member from "./member.model.js";

// User.hasMany(Transaction, {
//   foreignKey: "UserID",
// });
// Transaction.belongsTo(User, {
//   foreignKey: "UserID",
// });

// User.hasMany(Article, {
//   foreignKey: "UserID",
// });
// Article.belongsTo(User, {
//   foreignKey: "UserID",
// });

await db.sync({ force: false, alter: true });
console.log("The table for the All model was just (re)created!");

export { Transaction, User, Article };
