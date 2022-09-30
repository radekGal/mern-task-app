import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import userRouter from './api/user/UserRouter';

const app: Express = express();

dotenv.config();
app.use(express.json());
app.use('/api/user', userRouter)

const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('home page!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
