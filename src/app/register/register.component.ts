import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from '../Store/registerModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerModel: RegisterModel;
  submitted = false;

  constructor(private router: Router) { 
    this.registerModel = new RegisterModel();
  }

  ngOnInit(): void { 
    debugger;
   }

  regClick() {
    this.router.navigateByUrl('/register');
  }

  loginClick() {
    this.router.navigateByUrl('/login');
  }

  home() {
    this.router.navigateByUrl('');
  }

}
