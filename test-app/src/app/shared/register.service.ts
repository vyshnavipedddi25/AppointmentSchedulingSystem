import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly appUrl1="http://localhost:14703/api/Registers";
  regList:Register[];
  regData:Register = new Register();

  constructor(private objxHttp:HttpClient) { }
  getRegister(){
    this.objxHttp.get(this.appUrl1).toPromise().then(res => this.regList = res as Register[])
  }

  postRegister(){
    return this.objxHttp.post(this.appUrl1,this.regData);
  }

  del(id){
    return this.objxHttp.delete(this.appUrl1+"/"+id);
  }

  login(loginObj: any){
    return this.objxHttp.post<any>('http://localhost:14703/api/Registers/authenticate',loginObj);
  }

  adminlogin(loginObj1:any){
    return this.objxHttp.post<any>('http://localhost:14703/api/adminRegisters/authenticate',loginObj1)
  }
}
