import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { ProjectsService } from './projects/projects.service';
import { ProjectNewComponent } from './projects/project-new/project-new.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { CredentialsService } from './credentials/credentials.service';
import { NewCredentialComponent } from './credentials/new-credential/new-credential.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectItemComponent,
    ProjectNewComponent,
    ProjectDetailsComponent,
    CredentialsComponent,
    NewCredentialComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProjectsService,CredentialsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
