import Borrowing from "../models/borrowing.model.js";
import Book from "../models/book.model.js";
import Member from "../models/member.model.js";

const getAllBorrowings = async (req, res) => {
  try {
    const borrowings = await Borrowing.findAll();
    res.status(200).json({
      success: true,
      data: borrowings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const borrowBook = async (req, res) => {
  const { member_id, book_id } = req.body;

  try {
    const member = await Member.findOne({
      where: {
        id: member_id,
      },
    });
    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }
    if (member.penalty_until && new Date(member.penalty_until) > new Date()) {
      return res.status(400).json({
        error: "Member is currently punished and cannot borrow books.",
      });
    }
    const borrowCount = await Borrowing.count({
      where: {
        member_id,
      },
    });
    if (borrowCount >= 2) {
      return res.status(400).json({
        error: "Member cannot borrow more than 2 books.",
      });
    }
    const book = await Book.findOne({
      where: {
        id: book_id,
      },
    });
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    if (book.borrowed) {
      return res.status(400).json({
        success: false,
        message: "Book is already borrowed",
      });
    }

    const newBorrowing = await Borrowing.create({
      member_id,
      book_id,
    });

    await book.update({ borrowed: true });

    const updatedBorrowCount = await Borrowing.count({
      where: {
        member_id,
      },
    });
    await member.update({ book_borrowed: updatedBorrowCount });

    res.status(201).json({
      success: true,
      message: "Borrowing created successfully",
      data: newBorrowing,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const returnBook = async (req, res) => {
  const { member_id, book_id, return_date } = req.body;

  try {
    const borrowing = await Borrowing.findOne({
      where: { member_id, book_id, return_date: null },
    });
    if (!borrowing) {
      return res.status(400).json({
        success: false,
        message: "This book was not borrowed by this member.",
      });
    }

    const returnDate = new Date(return_date);
    borrowing.return_date = returnDate;
    await borrowing.save();

    const borrowDate = new Date(borrowing.borrow_date);
    const diffDays = Math.ceil(
      (returnDate - borrowDate) / (1000 * 60 * 60 * 24)
    );

    if (diffDays > 7) {
      const punishedUntil = new Date();
      punishedUntil.setDate(punishedUntil.getDate() + 3);
      await Member.update(
        { penalty_until: punishedUntil },
        { where: { id: member_id } }
      );
    }

    await Book.update(
      { borrowed: false, memberId: null },
      { where: { id: book_id } }
    );

    const updatedBorrowCount = await Borrowing.count({
      where: {
        member_id,
        return_date: null,
      },
    });
    await Member.update(
      { book_borrowed: updatedBorrowCount },
      { where: { id: member_id } }
    );

    res.status(201).json({
      success: true,
      message: "Book returned successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { getAllBorrowings, borrowBook, returnBook };
