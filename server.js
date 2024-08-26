import express, { json } from 'express';
import { userRouter, categoryRouter } from './src/routes/index.js';

const app = express();
const port = 3000;

app.use(json());
app.use('/user', userRouter);
app.use('/category', categoryRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
