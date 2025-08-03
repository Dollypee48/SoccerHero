
const allowedOrigins = [
  'http://localhost:5173',
  "https://soccer-hero.vercel.app" 
  
];

const corsOptions = {
  origin: (origin, callback) => {
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, 
  optionsSuccessStatus: 200, 
};

export default corsOptions;
