import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScheduleService } from 'src/app/shared/schedule.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  constructor(public objCon:ScheduleService){}

  ngOnInit(): void {this.resetForm()

  }
  resetForm(form?:NgForm){

    if(form!=null){

      form.form.reset();

    }

    else{

      this.objCon.conData={CId:0,CName:'',CEmail:'',CMessage:''}

    }

  }

  onSubmit(form:NgForm){

    this.objCon.postContacts().subscribe(res => {

      this.objCon.getContactList();

      // alert("Your Message is Sent!!!")
      Swal.fire("Your Message is Sent!!!",'','success');

    },

    err => {
      // alert("Message is not delivered"+err);
      Swal.fire("Message is not delivered",'','error');
    })

  }
}
