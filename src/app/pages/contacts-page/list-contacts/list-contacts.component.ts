
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact/contact.model';
import { InputContact } from 'src/app/models/inputContact/input-contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {

  constructor(

    ) {}
  
    ngOnInit(): void {
  
    }

}
