import { Component, OnInit } from '@angular/core';
import { CredentialsService } from './credentials.service';
import { CredentialsModel } from './credentials.model';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  // credentialList: CredentialsModel[];
  constructor(private credentialService: CredentialsService) { }

  ngOnInit() {
    //getting credentials from credential service
    // this.credentialList=this.credentialService.getCredentials();
  }

}
