import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted: boolean = false;
  profileForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Emailid: new FormControl('', [Validators.required, Validators.email]),
    abc: new FormControl('+91'),
    contactno: new FormControl('', Validators.required),
    empid: new FormControl('', Validators.required),
    address: new FormGroup({
      Line1: new FormControl('', Validators.required),
      Line2: new FormControl('', Validators.required),
      District: new FormControl('', Validators.required),
      state: new FormControl(''),
      Pincode: new FormControl('', Validators.required),
    })
  })
  get new() { return this.profileForm.controls; }

  onSubmit() {
    console.log(this.profileForm.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }

    alert('YOU REGISTERED SUCCESSFULLY.')
  }

}













