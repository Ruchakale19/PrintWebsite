import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginModel } from '../Store/LoginModel';

@Component({
  selector: 'app-add-client-profile',
  templateUrl: './add-client-profile.component.html',
  styleUrls: ['./add-client-profile.component.css']
})
export class AddClientProfileComponent implements OnInit {

  loginModel: LoginModel;

  constructor(private store: Store) { 
    this.loginModel = new LoginModel();
  }

  ngOnInit(): void {
    debugger;
    var loginUser = this.store.source['value']['PrintWebsite'].filter(
      (x) => {
        return x.viewName == 'Login';
      }
    );

    debugger
    if(loginUser[0].id > 0) {
      this.loginModel = Object.assign({}, loginUser[0]);
    }
  }

  home() { }

  LogOut() { }
}
