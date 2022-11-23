import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../Store/LoginModel';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  loginModel: LoginModel;

  constructor(private router: Router) { 
    this.loginModel = new LoginModel();
  }

  ngOnInit(): void {
    debugger;
    // this.loginModel = new LoginModel();
  }

  home() {
    this.router.navigateByUrl('/home');
   }

  servicesClick() { 
    this.router.navigateByUrl('/services');
  }

  aboutUsClick() { 
    this.router.navigateByUrl('/aboutus');
  }


  loginClick() {
    this.router.navigateByUrl('/login');
   }

  registerClick() { 
    this.router.navigateByUrl('/register');
  }




  openChat() { }

  editProfileClick(temp: LoginModel) { }
  logoutClick() { }
  openPaymentGateway() { }
  alerts() { }
  close() { }

}
