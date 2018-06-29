import { CredentialsModel } from "./credentials.model";

export class CredentialsService{
    private credentialList: CredentialsModel[]=[
        new CredentialsModel(
            'Service Credential 1',
            'Service Password 1'
        ),
        new CredentialsModel(
            'Service Credential 2',
            'Service Password 2'
        )
    ]

    addCredential(credentials: CredentialsModel){
        this.credentialList.push(credentials);
    }

    getCredentials(){
        return this.credentialList.slice();
    }
}