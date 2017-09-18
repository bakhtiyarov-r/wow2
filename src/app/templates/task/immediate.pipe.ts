import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'immediate' })
export class ImmediatePipe implements PipeTransform {
  public transform(values: any[], immediate: boolean): any[] {
    if (!values || !values.length) return [];
    if (!immediate) return values; 
     
    return values.filter(v => v.filter.immediate == true );
  }
}