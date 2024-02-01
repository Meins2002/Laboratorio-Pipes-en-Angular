import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalText'
})
export class CapitalTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
