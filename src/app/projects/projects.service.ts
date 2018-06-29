import { ProjectModel } from "./projects.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CredentialsModel } from "../credentials/credentials.model";


export class ProjectsService {
    projectChanged = new Subject<ProjectModel[]>();

    private projectsList: ProjectModel[] = [
        new ProjectModel(
            'Project 1',
            [
                new CredentialsModel(
                    'Credential for Project 1',
                    'Password 1'
                ), new CredentialsModel(
                    'Credential for Project 1',
                    'Password 2'
                )
            ]
        ),
        new ProjectModel(
            'Project 2',
            [
                new CredentialsModel(
                    'Credential 1 for Project 2',
                    'Password 1'
                ), new CredentialsModel(
                    'Credential 2 for Project 2',
                    'Password 2'
                )
            ]
        )
    ];

    //getting a project data at particular index
    getProject(projectIndex: number) {
        return this.projectsList[projectIndex];
    }

    //getting a data of all projects
    getProjects() {
        return this.projectsList.slice();
    }

    //adding a new project to projectList
    addProject(projectName: string) {
        this.projectsList.push(new ProjectModel(projectName,null));
        this.projectChanged.next(this.projectsList.slice());
    }

    //adding credentials to already defined projects
    addCredential(projectId: number,cname:string,cpass:string){
        this.getProject(projectId).credentialsList.push(new CredentialsModel(cname,cpass));
        console.log(this.getProject(projectId).credentialsList);
    }

}