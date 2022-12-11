import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserComponent } from './user.component';
import { UseradminloginComponent } from './useradminlogin/useradminlogin.component';
import { UserbookappointmentComponent } from './userbookappointment/userbookappointment.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserscheduledisplayComponent } from './userscheduledisplay/userscheduledisplay.component';

const routes: Routes = [
    {
        path:'user',component:UserComponent,
        children:[
            {
                path:'home',component:HomeComponent
            },
            {path:'aboutus',component:AboutusComponent},
            {path:'dashboard',component:DashboardComponent},
            {path:'registeruser',component:RegisteruserComponent},
            {path:'userlogin',component:UserloginComponent},
            {path:'userbookappointment',component:UserbookappointmentComponent,canActivate:[AuthGuard]},
            {path:'useradminlogin',component:UseradminloginComponent},
            {path:'contacts',component:ContactsComponent},
            {path:'userscheduledisplay',component:UserscheduledisplayComponent,canActivate:[AuthGuard]}

        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class UserRoutingModule { }
