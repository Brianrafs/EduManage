import { User } from "./user";

export class Manager extends User{
    constructor(private _nick: string,
                id: string,
                email: string,
                hashedPassword: string,
                logged: boolean){
        super(id, email, hashedPassword, logged)
    }
}
