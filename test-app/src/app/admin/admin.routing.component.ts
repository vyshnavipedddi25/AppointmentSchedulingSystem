import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomeComponent } from '../user/home/home.component';
import { AdminComponent } from './admin.component';
import { AdminbookappointmentComponent } from './adminbookappointment/adminbookappointment.component';
import { CancelDisplayComponent } from './cancel-display/cancel-display.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsDisplayComponent } from './doctors-display/doctors-display.component';
import { DoctorsRegisterComponent } from './doctors-register/doctors-register.component';
import { FeedbackdisplayComponent } from './feedbackdisplay/feedbackdisplay.component';
import { ScheduleDisplayComponent } from './schedule-display/schedule-display.component';

const routes: Routes = [
    {
        path:'admin',component:AdminComponent,canActivate:[AuthGuard],
        children:[
            {
                path:'dashboard',component:DashboardComponent
            },
            {path:'scheduledisplay',component:ScheduleDisplayComponent,canActivate:[AuthGuard]},
            {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
            {path:'canceldisplay',component:CancelDisplayComponent,canActivate:[AuthGuard]},
            {path:'doctors',component:DoctorsRegisterComponent,canActivate:[AuthGuard]},
            {path:'doctorsdisplay',component:DoctorsDisplayComponent,canActivate:[AuthGuard]},
            {path:'adminbookappointment',component:AdminbookappointmentComponent,canActivate:[AuthGuard]},
            {path:'feedbackdisplay',component:FeedbackdisplayComponent,canActivate:[AuthGuard]}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
