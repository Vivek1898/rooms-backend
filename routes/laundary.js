import express from "express";
import { createLaundary,
    updateLaundary,
    deleteLaundary,
    getLaundary,
    getAllLaundary
} from "../controllers/laundary.js";

import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createLaundary);

//UPDATE
router.put("/:id", verifyAdmin, updateLaundary);
//DELETE
router.delete("/:id", verifyAdmin, deleteLaundary);
//GET

router.get("/find/:id", getLaundary);
//GET ALL

router.get("/", getAllLaundary);


export default router;
