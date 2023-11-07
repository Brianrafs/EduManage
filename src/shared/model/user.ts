import * as bcrypt from "bcrypt";
export class User{
    constructor(private _id: number,
                private _email: string,
                private _hashedPassword: string) {
    }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  async setPassword(password: string) {
        // Gerar um hash da senha
        const saltRounds = 10;
        this._hashedPassword = await bcrypt.hash(password, saltRounds);
    }

    async checkPassword(password: string): Promise<boolean> {
        // Verificar a senha com o hash armazenado
        return bcrypt.compare(password, this._hashedPassword);
    }
}
