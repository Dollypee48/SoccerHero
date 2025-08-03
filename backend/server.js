import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import footballRoutes from './routes/footballRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import corsOptions from './config/corsOptions.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors(corsOptions)); 
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("football is running ✅");
});
// Routes
app.use('/api/football', footballRoutes);
app.use('/api/football', newsRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
