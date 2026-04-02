

export interface IUserRepository {
    create(name: string, email: string): Promise<string>;
    list(): Promise<{ id: string; name: string; email: string }[]>;
}