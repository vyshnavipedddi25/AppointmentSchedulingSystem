import { Pipe, PipeTransform } from '@angular/core';
import { Schedule } from './shared/schedule.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Schedule[],UserName:string): Schedule[] {
    const Result = [];
    if(value.length===0||UserName===""){
      return value;
    }
    for(const item of value){
      if(item.UserName===UserName){
        Result.push(item)
      }
    }
    return Result;
  }

}
