import express, { Application, Request, Response } from 'express';

class App {
  app: Application;

  constructor() {
    this.app = express();
  }
}

const app = new App().app;
const PORT = 8080

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
