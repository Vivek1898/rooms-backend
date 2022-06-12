import express from "express";
import { createMaid,
    updateMaid,
    deleteMaid,
    getMaid,
    getAllMaid
} from "../controllers/maid.js";

import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createMaid);

//UPDATE
router.put("/:id", verifyAdmin, updateMaid);
//DELETE
router.delete("/:id", verifyAdmin, deleteMaid);
//GET

router.get("/find/:id", getMaid);
//GET ALL

router.get("/", getAllMaid);


export default router;
