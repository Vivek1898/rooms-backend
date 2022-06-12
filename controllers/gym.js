import Gym from "../models/Gym";


export const createGym = async (req, res, next) => {
    const newGym = new Gym(req.body);
  
    try {
      const savedGym = await newGym.save();
      res.status(200).json(savedGym);
    } catch (err) {
      next(err);
    }
  };

  export const updateGym = async (req, res, next) => {
    try {
      const updatedGym = await Gym.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedGym);
    } catch (err) {
      next(err);
    }
  };

  export const deleteGym = async (req, res, next) => {
    try {
      await Gym.findByIdAndDelete(req.params.id);
      res.status(200).json("Gym has been deleted.");
    } catch (err) {
      next(err);
    }
  };


  export const getGym = async (req, res, next) => {
    try {
      const Gym = await Gym.findById(req.params.id);
      res.status(200).json(Gym);
    } catch (err) {
      next(err);
    }
  };


  export const getAllGym = async (req, res, next) => {
    try {
      const Gym = await Gym.find();
      res.status(200).json(Gym);
    } catch (err) {
      next(err);
    }
  };