import { Router } from 'express';
import { handleCreateUser, handleGetAllUsers } from '../controller/index.js';
import { validateUser } from '../middleware/index.js';

const userRouter = Router()
userRouter.get('/', handleGetAllUsers);
userRouter.post('/', validateUser, handleCreateUser);
export default userRouter;
