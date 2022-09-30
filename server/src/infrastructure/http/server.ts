import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const app: Express = express();

dotenv.config();
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('home page!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
