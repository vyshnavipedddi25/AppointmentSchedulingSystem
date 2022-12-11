import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/shared/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent {
  constructor(public objs1:RegisterService,public router:Router) { }

  ngOnInit() {this.resetForm()
  }

  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.objs1.regData={Uid:0,Name:'',UserName:'',Password:'',Email:'',Phone:'',DOB:''}
    }
  }

  onSubmit(form:NgForm){
    this.objs1.postRegister().subscribe(res => {
      this.objs1.getRegister();
      // alert("Inserted Successfully!!!")
      Swal.fire('Inserted Successfully','','success')
      this.router.navigate(['/user/userlogin'])
    },
    err => {
      // alert("Not Inserted"+err)
      Swal.fire('Unsuccessful','','error')
    })
  }


}
