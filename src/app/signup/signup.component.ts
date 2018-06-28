import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      'name': new FormGroup({
        'first-name': new FormControl(null, Validators.required),
        'last-name': new FormControl(null, Validators.required)
      }),
      'email': new FormControl(null, Validators.required),
      'passwordGroup': new FormGroup({
        'password': new FormControl(null, Validators.required),
        'confirm-password': new FormControl(null,Validators.required)
      },{validators: this.passwordMatch})
    });
  }

  onSubmit(){
    
  }

  passwordMatch(controls: FormControl):{invalid: boolean}{
    if(controls.get('password').value!== controls.get('confirm-password').value){
      return {invalid: true}
    }
  }

  onReset(){
    return this.signUpForm.reset();
  }
}
