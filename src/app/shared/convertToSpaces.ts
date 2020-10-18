import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces',
})
export default class ConvertToSpaces implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
