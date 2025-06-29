/* eslint-disable no-undef */
// Only load .env variables in a development environment
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

const app = express();

// It's good practice to restrict CORS in production
// This will allow requests ONLY from your deployed frontend and localhost
const allowedOrigins = [
  'http://localhost:3000', // For local testing
  'https://your-frontend-app.pages.dev' // IMPORTANT: REPLACE with your Cloudflare Pages URL
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin || allowedOrigins.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Initialize Firebase Admin SDK using environment variables
const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"), // Replace escaped newlines
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
};

// Prevent re-initialization on hot reloads
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Endpoint to fetch all users
app.get("/users", async (req, res) => {
  try {
    const listUsersResult = await admin.auth().listUsers();
    const users = listUsersResult.users.map((user) => ({
      id: user.uid, // Rename `uid` to `id`
      email: user.email || "N/A",
      createdAt: user.metadata.creationTime || "N/A",
      lastSignInTime: user.metadata.lastSignInTime || "N/A",
    }));
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// THIS IS THE CRITICAL CHANGE
// DO NOT listen on a port. Instead, export the app.
// Vercel will handle the rest.
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

module.exports = app; // <-- EXPORT THE APP