import { Component } from '@angular/core';
import { ScheduleService } from 'src/app/shared/schedule.service';

@Component({
  selector: 'app-cancel-display',
  templateUrl: './cancel-display.component.html',
  styleUrls: ['./cancel-display.component.css']
})
export class CancelDisplayComponent {
  constructor(public objCan:ScheduleService) { }

  ngOnInit(): void {
    this.objCan.getCancelList();
  }

}
