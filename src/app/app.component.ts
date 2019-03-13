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
    contactno: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]+")]),
    empid: new FormControl('', Validators.required),
    address: new FormGroup({
      Line1: new FormControl('', Validators.required),
      Line2: new FormControl('', Validators.required),
      District: new FormControl('', Validators.required),
      state: new FormControl(''),
      Pincode: new FormControl('', [Validators.required, , Validators.minLength(6), Validators.maxLength(6), Validators.pattern("[0-9]+")]),
    })
  })
  get new() { return this.profileForm.controls; }


  onSubmit() {
    console.log(this.profileForm.value);
    this.submitted = true;

    alert('YOU REGISTERED SUCCESSFULLY.')
  }

}


























