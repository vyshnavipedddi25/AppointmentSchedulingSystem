import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctors } from './doctors.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  readonly docUrl="http://localhost:14703/api/doctors";
  docList:Doctors[];
  docData:Doctors = new Doctors();

  constructor(private objDocHttp:HttpClient) { }
  getDoctorsList(){
    this.objDocHttp.get(this.docUrl).toPromise().then(res => this.docList = res as Doctors[])
  }

  postDoctorsList(){
    return this.objDocHttp.post(this.docUrl,this.docData);
  }

  delDoctors(id){
    return this.objDocHttp.delete(this.docUrl+"/"+id);
  }
}
