import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {

  transform(objs:any,term:any): any {
    if (term === undefined) {
      return objs;
      }
      return objs.filter((obj) =>{
        return (Number(obj.price) >= (term) || (obj.category) == (term));
    })
  }

}
