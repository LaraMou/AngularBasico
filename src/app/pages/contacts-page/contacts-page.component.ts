import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  // Example to Navigate to Contact Detail passing a 3 as the ID
  // And passing a Contact through navigation
  id: number = 3
  contact: Contact = new Contact("3", "test", "test", "test", "test", "test", "99999999", "test");

  constructor() { }

  ngOnInit(): void {
  }

}
