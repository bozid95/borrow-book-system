import express from "express";
import dotenv from "dotenv";
import db from "./config/database.config.js";
import bookRouter from "./routes/book.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use("/api/v1", bookRouter);

// Handle 404
app.all("*", (req, res, next) => {
  res.send("Url Not Found");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
