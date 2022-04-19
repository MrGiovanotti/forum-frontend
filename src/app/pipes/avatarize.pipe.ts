import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatarize'
})
export class AvatarizePipe implements PipeTransform {

  transform(name: string): string {
    const separatedName = name.split(' ');
    if (separatedName.length > 1) {
      return separatedName[0].substring(0, 1).toUpperCase()
      .concat(separatedName[1].substring(0, 1).toUpperCase());
    }
    return separatedName[0].substring(0, 1).toUpperCase();
  }

}
