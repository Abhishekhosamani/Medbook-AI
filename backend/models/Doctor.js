const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  specialization: String,

  experience: Number,

  consultationFee: Number,

  clinicAddress: String,

  isApproved: {
    type: Boolean,
    default: false
  }

},
{ timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);