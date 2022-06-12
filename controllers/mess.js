import Mess from "../models/Mess";

export const createMess = async (req, res, next) => {
    const newMess = new Mess(req.body);
  
    try {
      const savedMess = await newMess.save();
      res.status(200).json(savedMess);
    } catch (err) {
      next(err);
    }
  };

  export const updateMess = async (req, res, next) => {
    try {
      const updatedMess = await Mess.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedMess);
    } catch (err) {
      next(err);
    }
  };

  export const deleteMess = async (req, res, next) => {
    try {
      await Mess.findByIdAndDelete(req.params.id);
      res.status(200).json("Mess has been deleted.");
    } catch (err) {
      next(err);
    }
  };


  export const getMess = async (req, res, next) => {
    try {
      const Mess = await Mess.findById(req.params.id);
      res.status(200).json(Mess);
    } catch (err) {
      next(err);
    }
  };


  export const getAllMess = async (req, res, next) => {
    try {
      const Mess = await Mess.find();
      res.status(200).json(Mess);
    } catch (err) {
      next(err);
    }
  };