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
    this.addProjectForm=new FormGroup({
      'projectName': new FormControl(null,Validators.required)
    });
  }

  onAddProject(){
    this.projectService.addProject(this.addProjectForm.value);
    this.router.navigate(['projects']);
  }
}
