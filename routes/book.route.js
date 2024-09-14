import express from "express";
import { addBook } from "../controllers/book.controller.js";

const router = express.Router();

router.get("/book");

export default router;
