import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  //a:any;
  //b:unknown;
  //c:never;

  transform(value: string, length: number = 50, ...args: unknown[]): string {
    console.log(args);
    return value.substring(0,length) + "...";
  }

}
