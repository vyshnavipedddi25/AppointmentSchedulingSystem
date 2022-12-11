import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/shared/register.service';
import Swal from 'sweetalert2'
import { AuthorizeService } from 'src/app/shared/authorize.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  loginForm!: FormGroup;
  

  constructor(public auth:RegisterService, private fb: FormBuilder,private auth1:AuthorizeService,public http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      UserName: ['',Validators.required],
      Password: ['',Validators.required]
    })
    
  }


    onLogin(){
      if(this.loginForm.valid){
        console.log(this.loginForm.value)
this.auth1.logIn(this.loginForm.value).subscribe({
          next:(res)=>{
            this.http.get<any>("http://localhost:14703/api/Registers").subscribe(res => {
              const user=res.find((a:any)=>{
                return a.UserName=== this.loginForm.value.UserName && a.Password===this.loginForm.value.Password});
              
            })
            Swal.fire('Login Successful','','success');
            console.log(res.UserName)
            localStorage.setItem("UserId",res.UserName);
            console.log(localStorage.getItem("UserId"));
            this.loginForm.reset();
            this.auth1.storeToken(res.token);
            this.router.navigate(['/user/userbookappointment']);
          },
          error:(err)=>{
            Swal.fire('Invalid Credentials','','warning')
          }
        })
      }
      else{
        
        Swal.fire('Unsuccessful','','error')
      }
    }
}
