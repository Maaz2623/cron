import express from "express";
import axios from "axios";

const app = express();

// Define your route handler
app.get("/", (req, res) => {
  // Your logic to fetch data here
  res.send("Fetching data every 10 seconds...");
});

// Start your server
const port = 5000; // Choose your port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Fetch data every 10 seconds
setInterval(async () => {
  try {
    const res = await axios.post("https://taskly-v5.vercel.app/api/cron");
    console.log({ message: "fetched data", data: res.data });
  } catch (error) {
    console.log(error);
  }
}, 3600); // 10000 milliseconds = 10 seconds
