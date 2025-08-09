import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Connect to DB
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// API routes
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

// Test API route
app.get('/api', (req, res) => res.send("API is Working"));

// Catch-all to serve index.html for frontend routing
app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

export default app;
