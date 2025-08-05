import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import aiRouter from './src/route/route.js'
import dotenv from 'dotenv';
let app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
app.use(express.json());
app.use(cors({
  origin: 'https://ai-chatbox-review.netlify.app', 
  method : 'POST'
}))



app.use(aiRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  });
