export interface UserInterface {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    profilePhotoUrl: string;
}

export interface UserResponse {
    data: UserInterface;
}