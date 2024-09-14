import Book from "../models/book.model.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const addBook = async (req, res) => {
  const { name, code, author, stock } = req.body;
  try {
    const newBook = await Book.create({
      name,
      code,
      author,
      stock,
    });
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: newBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { name, code, author, stock } = req.body;
  try {
    const updatedBook = await Book.update(
      {
        name,
        code,
        author,
        stock,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAvailableBook = async (req, res) => {
  try {
    const books = await Book.findAll({
      where: {
        borrowed: false,
      },
    });

    const totalBooks = await Book.count({
      where: {
        borrowed: false,
      },
    });
    res.status(200).json({
      success: true,
      data: books,
      totalBooks: totalBooks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  getAvailableBook,
};
