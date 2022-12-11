import { Component } from '@angular/core';
import { ScheduleService } from 'src/app/shared/schedule.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-userscheduledisplay',
  templateUrl: './userscheduledisplay.component.html',
  styleUrls: ['./userscheduledisplay.component.css']
})
export class UserscheduledisplayComponent {
  UserId:string=localStorage.getItem("UserId");
  UserId1:number=1;
  
  constructor(public objSrv:ScheduleService) { }
  
  ngOnInit(): void {
    this.objSrv.getScheduleList();
  }

  del(pid){
    if(
      confirm('Cancel your Appointment ?')
      
      ){
      this.objSrv.delSchedule(pid).subscribe(res => {this.objSrv.getScheduleList();
      // alert("Appointment Deleted!!!")
      Swal.fire('Appointment Deleted','','success');
      
    },
      err=>(
        // alert('Errror!!!'+err)
        Swal.fire('Error!!! '+err,'','error')
        ));
      
    }
  }

  // postCancel(){
  //   return this.objCan.postCancelList().subscribe(res => {this.objSrv.getScheduleList})
  // }

  fillJForm(selecedPP){
    this.objSrv.ppData=Object.assign({},selecedPP)
  }

  upDaterecord(form:NgForm){
    this.objSrv.putSchedule().subscribe(res =>{
      this.objSrv.getScheduleList();
      // alert("Rescheduled")
      Swal.fire('Rescheduled Successfully','','success')
    },
    err => {
      // alert('Not updated'+err)
      Swal.fire('Error!!! '+err,'','error')
    })
  }
}
