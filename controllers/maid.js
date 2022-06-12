import Maid from "../models/Maid";

export const createMaid = async (req, res, next) => {
    const newMaid = new Maid(req.body);
  
    try {
      const savedMaid = await newMaid.save();
      res.status(200).json(savedMaid);
    } catch (err) {
      next(err);
    }
  };

  export const updateMaid = async (req, res, next) => {
    try {
      const updatedMaid = await Maid.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedMaid);
    } catch (err) {
      next(err);
    }
  };

  export const deleteMaid = async (req, res, next) => {
    try {
      await Maid.findByIdAndDelete(req.params.id);
      res.status(200).json("Maid has been deleted.");
    } catch (err) {
      next(err);
    }
  };


  export const getMaid = async (req, res, next) => {
    try {
      const Maid = await Maid.findById(req.params.id);
      res.status(200).json(Maid);
    } catch (err) {
      next(err);
    }
  };


  export const getAllMaid = async (req, res, next) => {
    try {
      const Maid = await Maid.find();
      res.status(200).json(Maid);
    } catch (err) {
      next(err);
    }
  };