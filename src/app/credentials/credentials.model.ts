export class CredentialsModel {
    public credentialName: string;
    public credentialPassword: string;

    constructor(credentialName: string, credentialPassword: string){
        this.credentialName=credentialName;
        this.credentialPassword=credentialPassword;
    }
}