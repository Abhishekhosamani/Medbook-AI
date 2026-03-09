const { body } = require("express-validator");

exports.createDoctorValidator = [
  body("userId")
    .notEmpty()
    .withMessage("User ID is required"),

  body("specialization")
    .notEmpty()
    .withMessage("Specialization is required"),

  body("experience")
    .isNumeric()
    .withMessage("Experience must be a number"),

  body("consultationFee")
    .isNumeric()
    .withMessage("Consultation fee must be a number"),

  body("clinicAddress")
    .notEmpty()
    .withMessage("Clinic address is required")
];