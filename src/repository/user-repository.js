import { AppDataSource } from '../database/data-source.js';
import { UserDatabase } from '../database/entity/index.js';

export async function fetchAllUsers() {
  const userRepository = AppDataSource.getRepository(UserDatabase);
  return await userRepository.find();
}
