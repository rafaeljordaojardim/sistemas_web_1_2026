import { CreateUserUseCase } from "../use-cases/create-user.use-case";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}
    async handle(req, res) {
        const { name, email } = req.body;

        const userId = await this.createUserUseCase.execute(name, email);
    
        res.status(201).json({
            message: "User created successfully",
            user: { id: userId, name, email }
        });
    }
}