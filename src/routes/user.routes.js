import { Router } from 'express';
import { handleGetAllUsers } from '../controller/index.js';

const userRouter = Router()
userRouter.get('/', handleGetAllUsers);
export default userRouter;
