import Laundary from "../models/Laundary";

export const createLaundary = async (req, res, next) => {
    const newLaundary = new Laundary(req.body);
  
    try {
      const savedLaundary = await newLaundary.save();
      res.status(200).json(savedLaundary);
    } catch (err) {
      next(err);
    }
  };

  
  export const updateLaundary = async (req, res, next) => {
    try {
      const updatedLaundary = await Laundary.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedLaundary);
    } catch (err) {
      next(err);
    }
  };

  export const deleteLaundary = async (req, res, next) => {
    try {
      await Laundary.findByIdAndDelete(req.params.id);
      res.status(200).json("Laundary has been deleted.");
    } catch (err) {
      next(err);
    }
  };


  export const getLaundary = async (req, res, next) => {
    try {
      const Laundary = await Laundary.findById(req.params.id);
      res.status(200).json(Laundary);
    } catch (err) {
      next(err);
    }
  };


  export const getAllLaundary = async (req, res, next) => {
    try {
      const Laundary = await Laundary.find();
      res.status(200).json(Laundary);
    } catch (err) {
      next(err);
    }
  };