import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cancel } from './cancel.model';
import { Contacts } from './contacts.model';
import { Schedule } from './schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  readonly ppApiUrl="http://localhost:14703/api/Appointments";

  readonly canUrl="http://localhost:14703/api/Cancels";
  readonly contactUrl="http://localhost:14703/api/contacts";

  ppList:Schedule[];
  ppData:Schedule = new Schedule();
  ccList:Cancel[];
  ccData:Cancel = new Cancel();
  conList:Contacts[];
  conData:Contacts = new Contacts();
  constructor(private objcHttp:HttpClient) { }
  getScheduleList(){ //For Appointments
    this.objcHttp.get(this.ppApiUrl).toPromise().then(res => this.ppList = res as Schedule[])
  }
  getCancelList(){ //For Cancellations
    this.objcHttp.get(this.canUrl).toPromise().then(res => this.ccList = res as Cancel[])
    }

    getContactList(){
      this.objcHttp.get(this.contactUrl).toPromise().then(res => this.conList = res as Contacts[])
    }


  postSchedule(){
    return this.objcHttp.post(this.ppApiUrl,this.ppData);
  }

  postCancel(){
    return this.objcHttp.post(this.canUrl,this.ccData);
  }

  postContacts(){
    return this.objcHttp.post(this.contactUrl,this.conData);
  }
  putSchedule(){
    return this.objcHttp.put(this.ppApiUrl+"/"+this.ppData.Id,this.ppData)

  }
  delSchedule(id){
    return this.objcHttp.delete(this.ppApiUrl+"/"+id);
  }
}
