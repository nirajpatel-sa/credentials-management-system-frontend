import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects/projects.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CredentialsModel } from '../credentials.model';

@Component({
  selector: 'app-new-credential',
  templateUrl: './new-credential.component.html',
  styleUrls: ['./new-credential.component.css']
})
export class NewCredentialComponent implements OnInit {
  credentialForm: FormGroup;
  id: number;
  projectName: string;

  constructor(private projectService: ProjectsService,
    private route: ActivatedRoute,
  private router:Router) { }

  ngOnInit() {
    //getting id from url
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.projectName = this.projectService.getProject(this.id).projectName;
      }
    );

    //creating form
    this.credentialForm = new FormGroup({
      'credential-name': new FormControl(null, Validators.required),
      'password': new FormControl(null,Validators.required),
    });
  }

  //sending credential data to service
  onCredentialSubmit(){
    const credentialName=this.credentialForm.get('credential-name').value;
    const credentialPassword=this.credentialForm.get('password').value;
    this.projectService.addCredential(this.id,credentialName,credentialPassword);
    this.router.navigate(['projects/'+this.id]);
  }

}
