import { fetchAllUsers } from '../repository/index.js';

export async function getAllUsers() {
    const users = await fetchAllUsers();
    return users;
}
