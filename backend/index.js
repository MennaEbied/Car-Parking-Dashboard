const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for frontend requests

// Initialize Firebase Admin SDK
const serviceAccount = require("./authenticationapp-a895b-firebase-adminsdk-m1y83-d68f5284ae.json"); // Replace with your service account key
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Endpoint to fetch all users
app.get("/users", async (req, res) => {
  try {
    const listUsersResult = await admin.auth().listUsers();
    const users = listUsersResult.users.map((user) => ({
      id: user.uid, // Rename `uid` to `id`
      email: user.email || "N/A",
      createdAt: user.metadata.creationTime || "N/A", // Add creation time
      lastSignInTime: user.metadata.lastSignInTime || "N/A", // Add last sign-in time
    }));
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});