import { IUserRepository } from "../interfaces/i-user-repository";

export class ListUsersUseCase {
    constructor(private userRepository: IUserRepository) {}
    async execute() {
        const users = await this.userRepository.list();
        return users;
    }
}