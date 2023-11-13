/* import { User } from "./user";
 */
export class Manager{
    constructor(public nick: string,
                public id: string,
                public email: string,
                public hashedPassword: string,
                public logged: boolean){
    }
}
