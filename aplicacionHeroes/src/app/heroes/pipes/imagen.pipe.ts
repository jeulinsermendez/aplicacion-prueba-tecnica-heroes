import { Hero } from './../interfaces/hero.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(hero?: Hero | null): string {
    if(!hero?.id && !hero?.image){
     return 'assets/no-image.png';
    }else {

      return `assets/heroes/${hero?.id}.jpg`;
    }
  }

}
