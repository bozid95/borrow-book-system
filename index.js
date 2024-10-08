import express from "express";
import dotenv from "dotenv";
import bookRouter from "./routes/book.route.js";
import memberRouter from "./routes/member.route.js";
import borrowRouter from "./routes/borrow.route.js";
import { Book, Member, Borrowing } from "./models/index.js";
import swaggerDoc from "./swagger/index.js";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", bookRouter);
app.use("/api/v1", memberRouter);
app.use("/api/v1", borrowRouter);
app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Handle 404
app.all("*", (req, res, next) => {
  res.send("Url Not Found");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
