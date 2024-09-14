import express from "express";
import Member from "../models/member.model.js";

const router = express.Router();

router.get("/member", getAll);
