import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return this.capitalizeWords(value as string);
  }

  private capitalizeWords(str: string): string {
    function myMap(palabra: string): string {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }

    debugger;
    return str.trim().split(/\s+/).map(myMap).join(' ');
  }
}
