import { Component, OnInit, Input } from '@angular/core';
import { ProjectModel } from '../../projects.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() projectItem: ProjectModel[];
  @Input() projectIndex: number;
  constructor() { }

  ngOnInit() {
  }

}
