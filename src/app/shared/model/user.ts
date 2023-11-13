/* import * as bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
export class User{
  constructor(public id: string,
    public email: string,
    public hashedPassword: string,
    public logged: boolean) {
this._id=uuidv4();
}
    }

  async setPassword(password: string) {
        // Generate hash
        const saltRounds = 10;
        this.hashedPassword= await bcrypt.hash(password, saltRounds);
    }

    async checkPassword(password: string): Promise<boolean> {
        // Compare the password with hash
        return bcrypt.compare(password, this.hashedPassword);
      }
} */
