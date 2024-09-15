import db from "../config/database.config.js";
import Book from "./book.model.js";
import Member from "./member.model.js";
import Borrowing from "./borrowing.model.js";

// Relations
Member.hasMany(Borrowing, { foreignKey: "member_id" });
Borrowing.belongsTo(Member, { foreignKey: "member_id" });

Borrowing.belongsTo(Book, { foreignKey: "book_id" });

// Member.hasMany(Book, {
//   as: "borrowedBooks",
//   foreignKey: "member_id",
//   sourceKey: "id",
// });

// Book.belongsTo(Member, {
//   foreignKey: "member_id",
//   targetKey: "id",
// });

// await db.sync({ force: false, alter: true });
// console.log("The table for the All model was just (re)created!");

export { Book, Member, Borrowing };
