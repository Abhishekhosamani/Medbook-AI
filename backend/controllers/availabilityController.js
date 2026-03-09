const Availability = require("../models/Availability");


// add availability
exports.addAvailability = async (req, res) => {
  try {

    const availability = await Availability.create(req.body);

    res.status(201).json({
      message: "Availability added",
      availability
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }
};


// get availability by doctor
exports.getAvailability = async (req, res) => {
  try {

    const availability = await Availability.find({
      doctorId: req.params.doctorId
    });

    res.json(availability);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }
};