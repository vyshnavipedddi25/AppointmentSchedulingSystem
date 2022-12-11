import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorsService } from 'src/app/shared/doctors.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctors-register',
  templateUrl: './doctors-register.component.html',
  styleUrls: ['./doctors-register.component.css']
})
export class DoctorsRegisterComponent {
  constructor(public objdoc:DoctorsService) { }

  ngOnInit() {this.resetForm()
  }

  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();
    }
    else{
      this.objdoc.docData={Did:0,DName:'',DSpecialization:''}
    }
  }

  onSubmit(form:NgForm){
    this.objdoc.postDoctorsList().subscribe(res => {
      this.objdoc.getDoctorsList();
      // alert("Inserted Successfully!!!")
      Swal.fire('Inserted Successfully','','success')
      this.resetForm();
    },
    err => {
      // alert("Not Inserted"+err)
      Swal.fire('Unsuccessful','','error')
    })
  }
}
