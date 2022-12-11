import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from 'src/app/shared/authorize.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private auth:AuthorizeService, private router:Router){}

  onLogOut(){
    this.auth.logOutAdmin();
    this.router.navigate(['/user/useradminlogin'])
  }

  
}
