const { body } = require("express-validator");

exports.bookAppointmentValidator = [
  body("doctorId")
    .notEmpty()
    .withMessage("Doctor ID is required"),

  body("patientId")
    .notEmpty()
    .withMessage("Patient ID is required"),

  body("date")
    .notEmpty()
    .withMessage("Date is required"),

  body("startTime")
    .notEmpty()
    .withMessage("Start time is required"),

  body("endTime")
    .notEmpty()
    .withMessage("End time is required")
];