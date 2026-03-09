const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
{
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  },

  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  date: String,

  startTime: String,

  endTime: String,

  status: {
    type: String,
    enum: ["booked", "cancelled", "completed"],
    default: "booked"
  }

},
{ timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);