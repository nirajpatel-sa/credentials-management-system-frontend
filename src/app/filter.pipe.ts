import { PipeTransform, Pipe } from "@angular/core";
import { Conditional } from "@angular/compiler";
import { CredentialsModel } from "./credentials/credentials.model";

@Pipe(
    {
        name: 'FilterPipe',
    }
)
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (!value) return [];
        if (!input) return value;

        input = input.toLowerCase();

        return value.filter(it => {
            return it.credentialName.toLowerCase().includes(input);
        });
        // var result = value.filter(function (obj) {
        //     return obj.credentialName == input;
        // });
        // console.log(result);
    }
}