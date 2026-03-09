const Appointment = require("../models/Appointment");
const Availability = require("../models/Availability");

exports.bookAppointment = async (req, res) => {
  try {

    const { doctorId, date, startTime } = req.body;

    const availability = await Availability.findOne({
      doctorId,
      date
    });

    if (!availability) {
      return res.status(400).json({
        message: "Doctor is not available on this date"
      });
    }

    const slot = availability.slots.find(
      (s) => s.startTime === startTime
    );

    if (!slot) {
      return res.status(400).json({
        message: "Selected time slot is not available"
      });
    }

    const existingAppointment = await Appointment.findOne({
      doctorId,
      date,
      startTime
    });

    if (existingAppointment) {
      return res.status(400).json({
        message: "Appointment already booked for this slot"
      });
    }

    const appointment = await Appointment.create(req.body);

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }
};


// ADD THIS FUNCTION
exports.getAppointments = async (req, res) => {
  try {

    const appointments = await Appointment.find();

    res.json(appointments);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }
};