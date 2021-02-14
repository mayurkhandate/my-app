import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname = '';
  lname = '';
  email = '';
  psw = '';
  age = 0;
  address = '';
  city = '';
  state = '';
  zip = 0;
  check = '';

  formDetails: {
    fname: string,
    lname: string,
    email: string,
    psw: string,
    age: number,
    address: string,
    city: string,
    state: string,
    zip: number,
    check: string
  }[] = [];

  submit() {
    const addDetails = {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      psw: this.psw,
      age: this.age,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip,
      check: this.check
    }

    this.formDetails.push(addDetails);
  }
}
