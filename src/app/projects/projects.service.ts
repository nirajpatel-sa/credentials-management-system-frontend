import { ProjectModel } from "./projects.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


export class ProjectsService{
    projectChanged = new Subject<ProjectModel[]>();

    private projectsList: ProjectModel[] = [
        new ProjectModel(
            'Project 1'
        ),
        new ProjectModel(
            'Project 2'
        )
    ];
    
    getProjectId(projectIndex: number){
        console.log(this.projectsList[projectIndex]);
        return this.projectsList[projectIndex];
    }
    
    getProjects(){
        return this.projectsList.slice();
    }

    addProject(project: ProjectModel){
        this.projectsList.push(project);
        console.log(this.projectsList);
        this.projectChanged.next(this.projectsList.slice());
    }
}