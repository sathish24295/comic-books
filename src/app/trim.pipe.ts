import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
})
export class TrimPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: string, ..._args: unknown[]): string {
    if (value) {
      return value.replace(/\s/g, '');
    }
    return value;
  }
}
