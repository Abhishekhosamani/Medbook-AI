const { body } = require("express-validator");

exports.addAvailabilityValidator = [
  body("doctorId")
    .notEmpty()
    .withMessage("Doctor ID is required"),

  body("date")
    .notEmpty()
    .withMessage("Date is required"),

  body("slots")
    .isArray({ min: 1 })
    .withMessage("Slots must be an array"),

  body("slots.*.startTime")
    .notEmpty()
    .withMessage("Start time is required"),

  body("slots.*.endTime")
    .notEmpty()
    .withMessage("End time is required")
];