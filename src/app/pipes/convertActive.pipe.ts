import { Pipe, PipeTransform } from '@angular/core';

// Convert boolean value to user define
// Usage:
//     value | convertActive: arg1: arg2
//     Example: 
//     {{true | convertActive:"Active":"Deactive"}} -> "Active"

@Pipe({ name: 'convertActive' })
export class ConvertActivePipe implements PipeTransform {
    transform(value: boolean, trueValue: any, falseValue: any): string {
        let result: string = "";
        result = value != true ? falseValue : trueValue;
        return result;
    }
}