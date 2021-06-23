import { HttpClient } from '@angular/common/http';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact/contact.model';
import { map } from "rxjs/operators"
import { InputContact } from '../models/inputContact/input-contact';
import { DomSanitizer } from '@angular/platform-browser';

// // Contact List Mock
// import { CONTACTS } from '../mocks/contacts/contacts.mock';
// import { Contact } from '../models/contact/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  //endpoint atributos

  private urlEndpoint: string = 'https://reqres.in/api/users';


  constructor(private http:HttpClient, private sanitizer: DomSanitizer) { }
  /**
   * Metodo para convertir las imagenes en BASE 64
   * @param $event Evento tipo file
   * @returns imagen en codigo base 64
   */
   extraerBase64 = async ($event: any) =>
   new Promise((resolve, reject) => {
     try {
       const unsafeImg = window.URL.createObjectURL($event);
       const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
       const reader = new FileReader();
       reader.readAsDataURL($event);
       reader.onload = () => {
         resolve({
           base: reader.result,
         });
       };
       reader.onerror = (error) => {
         resolve({
           base: null,
         });
       };
     } catch (e) {
       return e;
     }
   });
  getContacts(): Observable<InputContact> {
    return this.http.get<InputContact>(this.urlEndpoint);
    

  }
  updateContact(contact: Contact): Observable<any> {
    let body = {
      id: contact.id,
      email: contact.email,
      avatar: JSON.stringify(contact.avatar),
      first_name: contact.first_name,
      last_name: contact.last_name,
    };
    return this.http.put('https://reqres.in/api/users', body);
  }

}
