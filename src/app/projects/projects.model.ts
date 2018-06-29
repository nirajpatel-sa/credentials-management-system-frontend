import { CredentialsModel } from "../credentials/credentials.model";

export class ProjectModel{
    public projectName: string;
    public credentialsList: CredentialsModel[];

    constructor(projectName: string, credentialsList: CredentialsModel[]){
        this.projectName=projectName;
        this.credentialsList=credentialsList;
    }
}