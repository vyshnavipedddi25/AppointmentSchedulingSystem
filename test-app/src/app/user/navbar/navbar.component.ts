import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizeService } from 'src/app/shared/authorize.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auth:AuthorizeService, private router:Router){}

  onLogOut(){
    this.auth.logOut();
    this.router.navigate(['/user/userlogin']);  

  }

}
