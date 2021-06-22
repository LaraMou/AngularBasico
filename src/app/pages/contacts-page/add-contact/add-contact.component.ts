import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
// ID of the Contact, that comes from the URL Parms
idContact: number = 0;
contact: any;

/**
 * Constructor
 * @param activatedRoute --> The Active Route in that moment
 * @param router --> To navigate to another route
 */
constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location) { }

ngOnInit(): void {

  // 1. We capture the ID from the Params
  // this.idContact = this.activatedRoute.snapshot.params.id;

  // 2.
  this.activatedRoute.params.subscribe((params) => {
    if (params.id) {
      this.idContact = params.id
    } else {
      alert('No Contact found');
      this.returnBack();
    }
  });

  // We obtain the contact
  if (this.location.getState()) {
    this.contact = this.location.getState();
  }

}

returnBack() {
  // 1.
  // this.router.navigate(['/contacts']);
  // 2.
  this.location.back();
}


}
