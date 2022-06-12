import express from "express";
import {
 
  countByType,
  createHotel,
  deleteHotel,
 
  getHotelRooms,
  getHotels,
  getAllHotels,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotels);
//GET ALL

router.get("/", getAllHotels);

router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
