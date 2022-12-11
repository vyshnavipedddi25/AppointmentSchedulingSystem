import { Component } from '@angular/core';
import { ScheduleService } from 'src/app/shared/schedule.service';

@Component({
  selector: 'app-feedbackdisplay',
  templateUrl: './feedbackdisplay.component.html',
  styleUrls: ['./feedbackdisplay.component.css']
})
export class FeedbackdisplayComponent {
  constructor(public objCan:ScheduleService) { }

  ngOnInit(): void {
    this.objCan.getContactList();
  }
}
