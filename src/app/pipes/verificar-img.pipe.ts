import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verificarImg'
})
export class VerificarImgPipe implements PipeTransform {

  transform(img: any[]): string {
    if(!img){
      return 'assets/img/image-not-found.png';
    }
    if(img.length > 0){
      return img['0'].url;
    }else{
      return 'assets/img/image-not-found.png';
    }
    return null;
  }

}
