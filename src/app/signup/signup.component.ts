import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'first-name': new FormControl(null, Validators.required),
      'last-name': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'confirm-password': new FormControl(null,Validators.required)
    },{validators: this.pwdMatchValidator})//,this.passwordMatch
  }

  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirm-password').value
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    console.log(this.signUpForm);
  }




  onReset() {
    return this.signUpForm.reset();
  }
}
