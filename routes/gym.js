import express from "express";
import { createGym,
    updateGym,
    deleteGym,
    getGym,
    getAllGym
} from "../controllers/gym.js";

import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createGym);

//UPDATE
router.put("/:id", verifyAdmin, updateGym);
//DELETE
router.delete("/:id", verifyAdmin, deleteGym);
//GET

router.get("/find/:id", getGym);
//GET ALL

router.get("/", getAllGym);


export default router;
