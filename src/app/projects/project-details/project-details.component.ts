import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { ProjectModel } from '../projects.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  id: number;
  projects: ProjectModel;

  constructor(private projectService: ProjectsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.projects = this.projectService.getProject(this.id);
        }
      );
  }

  onAddCredential() {
    this.router.navigate(['new-credential'], { relativeTo: this.route });
  }
}
