export class UserModel {
  email: string;
  name: string;
  list: any;

  constructor(email: string, nom: string, list: any) {
    this.email = email;
    this.name = nom;
    this.list = list;
  }
}
