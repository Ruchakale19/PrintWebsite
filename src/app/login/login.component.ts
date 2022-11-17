import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../Store/LoginModel';

import { Store } from '@ngrx/store';
import * as pageStore from 'src/app/Store/PageStore/Page.Actions';

declare var swal: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;
  submitted = false;

  constructor(private router: Router, private store: Store<any>) { 
    this.loginModel = new LoginModel();
  }

  ngOnInit(): void {
    debugger;
  }

  loginClick() { 
    this.submitted = true;

    if (this.loginModel.email == 'client' && this.loginModel.password == '1234') {

      this.loginModel.id = 1;
      this.loginModel.email = "sample@sample.com";
      this.loginModel.name = "John Willson";
      this.loginModel.password = "1234";
      this.loginModel.mobileNumber = 9876543210;
      this.loginModel.userType = 2;

      debugger;

      this.store.dispatch(new pageStore.OpenPage(Object.assign({ }, this.loginModel)));
      debugger;
      if(this.loginModel.id > 0) {
        this.router.navigateByUrl('services');
      }
    }

    else {
      Swal.fire({
        text: 'Invalid Credentials!',
        icon: 'error'
      })
    }
  }

  forgotPasswordClick() { 
    this.router.navigateByUrl('/forgotpassword');
  }

  home() { 
    this.router.navigateByUrl('');
  }

  regClick() { 
    this.router.navigateByUrl('/register');
  }

}
