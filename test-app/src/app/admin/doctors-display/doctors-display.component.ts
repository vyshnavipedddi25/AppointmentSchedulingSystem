import { Component } from '@angular/core';
import { DoctorsService } from 'src/app/shared/doctors.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctors-display',
  templateUrl: './doctors-display.component.html',
  styleUrls: ['./doctors-display.component.css']
})
export class DoctorsDisplayComponent {
  constructor(public objdoc:DoctorsService) { }
  ngOnInit(): void {
    this.objdoc.getDoctorsList();
  }

  del(Did){
    if(
      confirm('Cancel your Appointment ?')
      
      ){
      this.objdoc.delDoctors(Did).subscribe(res => {this.objdoc.getDoctorsList();
      // alert("Appointment Deleted!!!")
      Swal.fire('Appointment Deleted','','success');
      
      
    },
      err=>(
        // alert('Errror!!!'+err)
        Swal.fire('Error!!! '+err,'','error')
        ));
      
    }
  }

}
