import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {
   // Atributos
   public contact: Contact;

   // Route sirve para manejar rutas
   constructor(
     private contactService: ContactService,
     private route: Router
   ) {
     this.contact = {
       'id':'',
       'name': '',
       'surname': '',
       'description': '',
       'sex': 'hombre',
       'email': '',
       'telephone': '',
       'company': ''
     }
   }

   ngOnInit() {
   }

   /**
    * Añade el contacto, con los datos añadidos en el formulario
    */
   addContact() {

     console.log(this.contact);
     // Añado el contacto
     this.contactService.addContact(this.contact);
     // Vuelvo al inicio
     this.route.navigate(['/contacts']);
   }
}
