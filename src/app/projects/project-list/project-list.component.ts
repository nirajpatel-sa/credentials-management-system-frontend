import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../projects.model';
import { ProjectsService } from '../projects.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectList: ProjectModel[];

  constructor(private projectService: ProjectsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectService.projectChanged.subscribe(
      (project: ProjectModel[]) =>{
        this.projectList = project;
      }
    )
    this.projectList = this.projectService.getProjects();
  }

  onAddProject() {
    this.router.navigate(['new'], { relativeTo: this.route})
  }

}
