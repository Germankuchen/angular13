import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {

  constructor(private ds: DomSanitizer) {
  }

  transform(value: string): any {
    console.log('La URL es: ' + value);
    return this.ds.bypassSecurityTrustResourceUrl(value);
  }

}
