import { IUserRepository } from "../interfaces/i-user-repository";

const users: { id: string; name: string; email: string }[] = [];

export class UserRepository implements IUserRepository {

    async create(name: string, email: string): Promise<string> {
        const id = new Date().getTime().toString();
        users.push({ id, name, email });
        return id;
    }

    async list(): Promise<{ id: string; name: string; email: string }[]> {
        return users;
    }
}