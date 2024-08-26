import { fetchAllUsers } from '../repository/index.js';

export function getAllUsers() {
    const users = fetchAllUsers();
    return users;
}
