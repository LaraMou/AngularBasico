
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact/contact.model';
import { InputContact } from 'src/app/models/inputContact/input-contact';
import { ContactService } from 'src/app/services/contact.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  // Atributos
  getContact: InputContact = new InputContact(0,0,0,0,undefined,undefined);
  contacts: Contact[] = [];
  contactSubscription: Subscription = new Subscription();
  contactSeleccion: Contact | undefined;


  // Inyecto el servicio de ContactService
  constructor(
    private contactService: ContactService,
    public modalService: ModalService,
    private snackBar: MatSnackBar){}
    
 

  ngOnInit() {
    console.log("hola")
   
    this.contactSubscription = this.contactService.getContacts().subscribe(
      (res) => {
        this.getContact = res;
        this.contacts = this.getContact.data;
      },
      
      (error) => 
        this.snackBar.open(
        'Error al obtener contactos',
        'Error : '+ error.status + ' : '+error.mensage,
        {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        }
      )
    );
      }
      
      abrirModal(contact: Contact) {

        console.log("hola modal"+contact.first_name);
        this.contactSeleccion = contact;
        this.modalService.abrirModal();
      }
      ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.contactSubscription.unsubscribe();
      }

  

}

