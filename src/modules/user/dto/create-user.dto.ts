export class CreateUserDto {
    email: string;
    password: string;
    name: string;
    notes: any[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
