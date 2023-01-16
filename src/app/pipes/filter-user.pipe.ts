import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(objs: any, term: any): any {
    if (term == undefined) {
      return objs;
    }
    return objs.filter((obj: { email: string; Tel:Number}) => {
      return (obj.email.toLowerCase().includes(term.toLowerCase()) || (Number(obj.Tel) == (term))); 
    });
    
  }


}
