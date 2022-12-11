import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {//Used for Authentication and Authorization
  readonly authUrl="http://localhost:14703/api/Registers1/Login";

  readonly authAdminUrl="http://localhost:14703/api/AdminRegisters/authenticate";
  
  constructor(private http:HttpClient) { }

  logIn(loginObj:any){
    console.log(loginObj);
    return this.http.post<any>(this.authUrl,loginObj);
  }

  logOut(){
    localStorage.clear();
    localStorage.removeItem('token');
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLogedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  //For Admin Login

  logInAdmin(loginObj:any){
    return this.http.post<any>(this.authAdminUrl,loginObj);
  }

  logOutAdmin(){
    localStorage.clear();
    localStorage.removeItem('admintoken');
    
  }

  storeAdminToken(admintokenValue:string){
    localStorage.setItem('token',admintokenValue);
  }

  
  getAdminToken(){
    return localStorage.getItem('admintoken');
  }

  isadminLogedIn(): boolean{
    return !!localStorage.getItem('admintoken');
  }

}
