import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'night' })
export class NightPipe implements PipeTransform {
  public transform(values: any[], night: boolean): any[] {
    if (!values || !values.length) return [];
    if (!night) return values; 
      
    return values.filter(v => v.filter.night == true );
  }
}