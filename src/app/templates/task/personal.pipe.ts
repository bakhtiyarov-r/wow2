import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'personal' })
export class PersonalPipe implements PipeTransform {
  public transform(values: any[], personal: boolean): any[] {
    if (!values || !values.length) return [];
    if (!personal) return values; 
      console.log(values);
    return (values.filter(v => v.filter.personal == true ));

  }
}