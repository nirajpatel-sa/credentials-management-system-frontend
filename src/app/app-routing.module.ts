import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectNewComponent } from "./projects/project-new/project-new.component";
import { ProjectItemComponent } from "./projects/project-list/project-item/project-item.component";
import { ProjectDetailsComponent } from "./projects/project-details/project-details.component";
import { CredentialsComponent } from "./credentials/credentials.component";
import { NewCredentialComponent } from "./credentials/new-credential/new-credential.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    {path: 'new',component: ProjectNewComponent},
    { path: 'projects', component: ProjectsComponent,children:[
        {path: ':id',component: ProjectDetailsComponent},
        {path: ':id/new-credential',component:NewCredentialComponent}
    ] },
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}