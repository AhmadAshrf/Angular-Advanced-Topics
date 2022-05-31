import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDtoEGP'
})
export class EgptoUSDPipe implements PipeTransform {

  transform(value: number, rate:number = 18): number {
    return value * rate
  }

}
