export interface IUser {
    user: User,
    authToken: string
}

interface User {
    email: string,
    password: string
}