import express from "express";
import {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  getAvailableBook,
} from "../controllers/book.controller.js";

const router = express.Router();

router.get("/book/available", getAvailableBook);
router.get("/book", getAllBooks);
router.get("/book/:id", getBookById);
router.post("/book", addBook);
router.put("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

export default router;
