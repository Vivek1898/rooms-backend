import express from "express";
import { createMess,
    updateMess,
    deleteMess,
    getMess,
    getAllMess
} from "../controllers/mess.js";

import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createMess);

//UPDATE
router.put("/:id", verifyAdmin, updateMess);
//DELETE
router.delete("/:id", verifyAdmin, deleteMess);
//GET

router.get("/find/:id", getMess);
//GET ALL

router.get("/", getAllMess);


export default router;


