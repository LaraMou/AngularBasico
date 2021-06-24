import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';
import { Contact } from 'src/app/models/contact/contact.model';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  @Input() contact: Contact | undefined;

  titulo: string = "Estas son tus tareas";
 
  progreso: number = 0;

  constructor(
  
    // private authService: AuthService,
    private activatedRoute: ActivatedRoute,
     public modalService: ModalService) { }

  ngOnInit() {}

 
  cerrarModal() {
    this.modalService.cerrarModal();
   
    this.progreso = 0;
  }
}