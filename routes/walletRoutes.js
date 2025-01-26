import express from "express";
import { getWallets, createWallet } from "../controllers/walletController.js";

const router = express.Router();

router.get("/", getWallets);
router.post("/create", createWallet);

export default router;
