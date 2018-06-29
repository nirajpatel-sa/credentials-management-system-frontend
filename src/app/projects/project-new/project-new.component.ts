import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {
  addProjectForm: FormGroup;

  constructor(private router: Router,private projectService: ProjectsService) { }

  ngOnInit() {
    //creating form
    this.addProjectForm=new FormGroup({
      'projectName': new FormControl(null,Validators.required)
    });
  }

  //adding a new project to service
  onProjectSubmit(){
    const projectName=this.addProjectForm.get('projectName').value;
    this.projectService.addProject(projectName);
    this.router.navigate(['projects']);
  }
}
