import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ScheduleService } from 'src/app/shared/schedule.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminbookappointment',
  templateUrl: './adminbookappointment.component.html',
  styleUrls: ['./adminbookappointment.component.css']
})
export class AdminbookappointmentComponent {
  constructor (public objservice:ScheduleService) { }

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
    this.objservice.postSchedule().subscribe(res => {
      this.objservice.getScheduleList();
      // alert("Inserted Successfully")
      Swal.fire('Scheduled Successfully','','success')
      this.resetForm();

    },
    err => {
      // alert('Not Inserted'+err)
      Swal.fire('Schedule Unsuccessful','','error')
  }
    )
    
  }
}
