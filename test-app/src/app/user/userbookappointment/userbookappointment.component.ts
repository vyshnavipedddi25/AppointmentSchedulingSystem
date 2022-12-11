import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleService } from 'src/app/shared/schedule.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userbookappointment',
  templateUrl: './userbookappointment.component.html',
  styleUrls: ['./userbookappointment.component.css']
})
export class UserbookappointmentComponent {
  // UserId: string=localStorage.getItem("UserId");
  // Uid1:number=parseInt(this.UserId);
  UserId:string=localStorage.getItem("UserId");
  
  constructor (public objservice:ScheduleService,public router:Router) { }

  ngOnInit()  {this.resetForm()
    
  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.form.reset();

    }
    else{
      this.objservice.ppData={Id:0,FName:'',LName:'',Email:'',Mobile:'',Date:'',Time:'',Doctor:'',Confirm:'',UserName:''}
    }
  } 

  onSubmit(form:NgForm){
    this.objservice.ppData.UserName=this.UserId;
    this.objservice.postSchedule().subscribe(res => {
      this.objservice.getScheduleList();
      // alert("Inserted Successfully")
      Swal.fire('Scheduled Successfully','','success');
      this.router.navigate(['/user/userscheduledisplay']);


      this.resetForm();

    },
    err => {
      // alert('Not Inserted'+err)
      Swal.fire('Schedule Unsuccessful','','error')
  }
    )
    
  }
}
