import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(objs: any, term: any): any {
    if (term === undefined) {
      return objs;
    }
    return objs.filter((obj: { category: string; }) => {
      return (obj.category.toLowerCase().includes(term.toLowerCase())
      );
    });
  }

}
