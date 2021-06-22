import { HttpClient } from '@angular/common/http';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact/contact.model';
import { map } from "rxjs/operators"

// // Contact List Mock
// import { CONTACTS } from '../mocks/contacts/contacts.mock';
// import { Contact } from '../models/contact/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _listContacts: Contact[];
  constructor(private http: HttpClient) {
    this._listContacts = [];
  }

  /**
   * Devuelve la lista de contactos
   */
  get listContacts(): Contact[]{
    return this._listContacts;
  }

  /**
   * Añade un contacto a la lista
   * @param contact contacto a añadir
   */
  addContact(contact: Contact){
    this._listContacts.push(contact);
  }

  /**
   * Recoge los contactos del fichero json
   * @param path ruta del fichero json
   */
  getData(path: string){
    return this.http.get<Contact[]>(path).pipe(
      map(list => {
        this._listContacts = list;
        return list;
      })
    );
  }


  /**
   * Basic getAllContacts
   * */
  // getAllContacts(): Promise<Contact[]> {
  //   return CONTACTS;
  // }


  /**
   * PROMISED getAllContacts
   * Method to obtain all contacts
   * @return Promise<Contact[]>
   */
  // getAllContacts(): Promise<Contact[]> {
  //   return Promise.resolve(CONTACTS);
  // }


  // /**
  //  * OBSERVABLE getAllContacts
  //  * Method to obtain all contacts
  //  * @return Observable<Contact[]>
  // */
  // getAllContacts(): Observable<Contact[]> {
  //   let observable = Observable.create((observer: any) => {
  //     observer.next(CONTACTS); // Next will send values to the subscriber
  //     observer.complete(); // This will close the emission of values to the subscriber
  //   });
  //   return observable;
  // }

}
