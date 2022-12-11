import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthorizeService } from '../shared/authorize.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private auth:AuthorizeService,private router:Router ){}
  canActivate():boolean{
    if(this.auth.isLogedIn()){
      return true
    }
    else if(this.auth.isadminLogedIn()){
      return true
    }
    else{
      Swal.fire('Please Login','','warning');
      this.router.navigate(['/user/userlogin']);
      return false;
    }

    
  }
  
}
