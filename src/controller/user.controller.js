import { getAllUsers } from '../service/index.js';
import { statusCodes } from '../utils/http.js'

export async function handleGetAllUsers(req, res) {
    const users = await getAllUsers();
    return res.status(statusCodes.OK).json(users);
};

export function handleCreateUser(req, res){
    return res.status(statusCodes.CREATED).json(req.body);
};
