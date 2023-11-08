import * as bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
export class User{
    constructor(private _id: string,
                private _email: string,
                private _hashedPassword: string) {
        this._id=uuidv4();
    }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  async setPassword(password: string) {
        // Generate hash
        const saltRounds = 10;
        this._hashedPassword = await bcrypt.hash(password, saltRounds);
    }

    async checkPassword(password: string): Promise<boolean> {
        // Compare the password with hash
        return bcrypt.compare(password, this._hashedPassword);
    }
}
