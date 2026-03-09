require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const availabilityRoutes = require("./routes/availabilityRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const User = require("./models/User");

const app = express();

app.use(express.json());

// connect database
connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/availability", availabilityRoutes);
app.use("/api/appointments", appointmentRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server running");
});

// temporary test route
app.get("/add-user", async (req, res) => {
  const user = await User.create({
    name: "Abhishek",
    email: "test@gmail.com",
    password: "123456"
  });

  res.json(user);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});