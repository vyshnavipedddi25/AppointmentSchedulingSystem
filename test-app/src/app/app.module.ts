import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin/admin.routing.component';
import { UserRoutingModule } from './user/user.routing.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './user/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { AboutusComponent } from './user/aboutus/aboutus.component';
import { ScheduleDisplayComponent } from './admin/schedule-display/schedule-display.component';
import { CancelDisplayComponent } from './admin/cancel-display/cancel-display.component';
import { RegisteruserComponent } from './user/registeruser/registeruser.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserbookappointmentComponent } from './user/userbookappointment/userbookappointment.component';
import { UseradminloginComponent } from './user/useradminlogin/useradminlogin.component';
import { AdminbookappointmentComponent } from './admin/adminbookappointment/adminbookappointment.component';
import { DoctorsRegisterComponent } from './admin/doctors-register/doctors-register.component';
import { DoctorsDisplayComponent } from './admin/doctors-display/doctors-display.component';
import { ContactsComponent } from './user/contacts/contacts.component';
import { FeedbackdisplayComponent } from './admin/feedbackdisplay/feedbackdisplay.component';
import { Home1Component } from './landing/home1.component';
import { UserscheduledisplayComponent } from './user/userscheduledisplay/userscheduledisplay.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    AboutusComponent,
    ScheduleDisplayComponent,
    CancelDisplayComponent,
    RegisteruserComponent,
    UserloginComponent,
    UserbookappointmentComponent,
    UseradminloginComponent,
    AdminbookappointmentComponent,
    DoctorsRegisterComponent,
    DoctorsDisplayComponent,
    ContactsComponent,
    FeedbackdisplayComponent,
    Home1Component,
    UserscheduledisplayComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AdminRoutingModule,UserRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
