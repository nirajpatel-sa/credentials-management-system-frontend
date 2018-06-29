import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../projects.model';
import { ProjectsService } from '../projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectList: ProjectModel[];

  constructor(private projectService: ProjectsService,
    private router: Router) { }

  ngOnInit() {
    //getting project data
    this.projectService.projectChanged.subscribe(
      (project: ProjectModel[]) =>{
        this.projectList = project;
      }
    )
    this.projectList = this.projectService.getProjects();
  }

  //navigating to add project form
  onAddProject() {
    this.router.navigate(['new'])
  }

}
