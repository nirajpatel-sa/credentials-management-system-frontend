import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signInForm=new FormGroup({
      'email': new FormControl(null,Validators.required),
      'password': new FormControl(null,Validators.required)
    });
  }

}
