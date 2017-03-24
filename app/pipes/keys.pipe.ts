import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'keys'
})
export class KeysPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        let keys: any[] = [];
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    }
}
