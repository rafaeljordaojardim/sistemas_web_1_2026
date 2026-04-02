import { CreateUserController } from "../controllers/create-user.controller";
import { UserRepository } from "../repostiories/user-repository";
import { CreateUserUseCase } from "../use-cases/create-user.use-case";

export const makeCreateUserController = () => {
    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);
    return new CreateUserController(createUserUseCase);
};