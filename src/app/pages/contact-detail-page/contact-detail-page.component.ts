import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { InputContactPut } from 'src/app/models/inputContact/input-contact-put';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {
   // Atributos

   contactResponse: any = {};
  idContact: string = '';
  contact: Contact = new Contact( 0,'', '', '', '');
  archivoCapturado: any;
  imagebase64: any;
  imagebase64Json: string = '';
  updateForm: FormGroup = new FormGroup({});
  contactSubscription: Subscription = new Subscription();
  routerSubscription: Subscription = new Subscription();
  actuali: Boolean = false;

   // Route sirve para manejar rutas
   constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
    private contactService: ContactService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
gOnInit(): void {
  this.routerSubscription=this.activatedRoute.params.subscribe((params) => {
    if (params.id) {
      this.idContact = params.id;
    } else {
      this.snackBar.open('No Contact Found', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.returnBack();
    }
  });

  if (this.actuali == true) {
    this.contact.avatar = JSON.parse(this.contactResponse.avatar);
    this.contact.first_name = this.contactResponse.first_name;
    this.contact.last_name = this.contactResponse.last_name;
    this.contact.id = this.contactResponse.id;
    this.contact.email = this.contactResponse.email;
  }
  if (this.location.getState() && this.actuali == false) {
    this.contact = this.location.getState() as Contact;
    this.actuali = true;
  }
  this.updateForm = this.formBuilder.group({
    avatar: [this.contact.avatar],
    email: [this.contact.email, Validators.email],
    first_name: [this.contact.first_name],
    last_name: [this.contact.last_name],
  });
}


/**
 * Metodo para actualizar el contacto
 */
update() {
  this.location.replaceState('/contacts/' + this.contact.id);
  this.contactSubscription = this.contactService
    .updateContact(this.contact)
    .subscribe(
      (response) => {
        this.contactResponse = response as InputContactPut;
        console.log(this.contactResponse);
        this.snackBar.open(
          'Elemento actualizado correctamente',
          'Timestamp: ' + this.contactResponse.updatedAt,
          {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          }
        );
      },
      (error: { status: string; message: string; }) => {
        this.snackBar.open(
          'Error en el Update',
          'Error: ' + error.status + ' : ' + error.message,
          {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          }
        );
      }
    );
  this.router.navigateByUrl('/contacts/' + this.idContact);
}
/**
* Metodo para sub imagen del input y cambiarla a base64
* @param event
*/
showPreview(event: any) {
  this.archivoCapturado = event.target.files[0];
  //
  //TODO---.- Importante de Leer ..------

 //TODO opcional porque el servidor no acepta tamaño de la imagen base64
 //TODO(cambiar por lo comentado de abajo , si el servidor admite Base64)
    this.contact.avatar= this.archivoCapturado.name;

  //TODO----------------------------------------------
 // this.contactService
    //.extraerBase64(this.archivoCapturado)
  //  .then((imagen: any) => {
   //   this.imagebase64 = imagen.base;
   //   this.contact.avatar = imagen.base;
  //  });
      //TODO----------------------------------------------
}

/**
 * Metodo Volver atras
 */
returnBack() {
  this.location.back();
}

ngOnDestroy(): void {
  this.contactSubscription.unsubscribe();
  this.routerSubscription.unsubscribe();

}
}