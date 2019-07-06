import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirsmtom'
})
export class ConvertirsmtomPipe implements PipeTransform {

  transform(numeroMS:number): any {
    return numeroMS/60000 ;
  }

}
