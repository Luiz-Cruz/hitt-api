import { getAllUsers } from '../service/index.js';

export function handleGetAllUsers(req, res) {
    const users = getAllUsers();
    return res.status(201).json(users);
}
