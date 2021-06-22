import { IContact } from "./icontact.interface";
export class Contact implements IContact{
  id: string;
  name: string;
  surname: string;
  description: string;
  sex: string;
  email: string;
  telephone: string;
  company: string;


  constructor(
    id: string,
    name: string,
    surname: string,
    description: string,
    sex: string,
    email: string,
    telephone: string,
    company: string
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.description = description;
    this.sex = sex;
    this.email = email;
    this.telephone = telephone;
    this.company = company;
  }


  /**
   * showDetails()
   * @returns string
   * Contact details in string
   */
  // showDetails(): string {
  //   return `Contact: ${this.first_name} ${this.last_name}
  //   \nEmail: ${this.email}
  //   \nPhone:${this.phone}
  //   `
  // }


}
