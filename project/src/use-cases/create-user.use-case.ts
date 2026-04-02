import { IUserRepository } from "../interfaces/i-user-repository";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}
    async execute(name: string, email: string) {
       await this.userRepository.create(name, email);
    }
}