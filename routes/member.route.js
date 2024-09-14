import express from "express";
import {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
} from "../controllers/member.controller.js";

const router = express.Router();

router.get("/member", getAllMembers);
router.get("/member/:id", getMemberById);
router.post("/member", addMember);
router.put("/member/:id", updateMember);
router.delete("/member/:id", deleteMember);

export default router;
