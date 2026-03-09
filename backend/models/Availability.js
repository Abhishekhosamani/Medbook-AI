const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema(
{
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  },

  date: String,

  slots: [
    {
      startTime: String,
      endTime: String,
      isBooked: {
        type: Boolean,
        default: false
      }
    }
  ]

},
{ timestamps: true }
);

module.exports = mongoose.model("Availability", availabilitySchema);