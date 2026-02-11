const express = require("express");
const os = require("os");

const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
  res.json({
    message: "🚀 This would be done after the implemtenation of the CICd pipline.DevOps CI/CD Application Running Successfully!",
    environment: ENV,
    hostname: os.hostname(),
    timestamp: new Date(),
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    uptime: process.uptime(),
  });
});

app.get("/about", (req, res) => {
  res.json({
    developer: "Thilak",
    role: "DevOps Engineer",
    version: "1.0.0",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
