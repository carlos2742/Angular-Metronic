import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateNumber'
})
export class AbbreviateNumberPipe implements PipeTransform {

  transform(value: any, args?: any): string {

    if (value > 999999) {
      return `${Math.floor(value / 1000000)}M`;
    } else if (value > 999) {
      return `${Math.floor(value / 1000)}K`;

    }
    return value.toString();
  }

}
