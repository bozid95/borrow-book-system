import { DataTypes } from "sequelize";
import db from "../config/database.config.js";

const Member = db.define(
  "members",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    book_borrowed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    penalty_until: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Member;
