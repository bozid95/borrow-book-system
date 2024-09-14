import express from "express";
import {
  getAllBorrowings,
  borrowBook,
  returnBook,
} from "../controllers/borrow.controller.js";

const router = express.Router();

router.get("/borrowed", getAllBorrowings);
router.post("/borrow-book", borrowBook);
router.post("/return-book", returnBook);

export default router;
