const Doctor = require("../models/Doctor");


// create doctor profile
exports.createDoctor = async (req, res) => {
  try {

    const doctor = await Doctor.create(req.body);

    res.status(201).json({
      message: "Doctor profile created",
      doctor
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }
};


// get all doctors
exports.getDoctors = async (req, res) => {
  try {

    const doctors = await Doctor.find();

    res.json(doctors);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }
};