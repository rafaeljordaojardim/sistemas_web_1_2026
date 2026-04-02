import { ListUsersController } from "../controllers/list-users.controller";
import { UserRepository } from "../repostiories/user-repository";
import { ListUsersUseCase } from "../use-cases/list-users.use-case";

export const makeListUsersController = () => {
    const userRepository = new UserRepository();
    const listUsersUseCase = new ListUsersUseCase(userRepository);
    return new ListUsersController(listUsersUseCase);
};