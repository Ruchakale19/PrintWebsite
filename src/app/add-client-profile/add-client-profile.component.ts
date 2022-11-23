import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApicallingService } from '../apicalling.service';
import { LoginModel } from '../Store/LoginModel';

@Component({
  selector: 'app-add-client-profile',
  templateUrl: './add-client-profile.component.html',
  styleUrls: ['./add-client-profile.component.css']
})
export class AddClientProfileComponent implements OnInit {

  loginModel: LoginModel;
  result: any = [];

  constructor(private store: Store, private apiCallingService: ApicallingService) { 
    this.loginModel = new LoginModel();
  }

  ngOnInit(): void {
    debugger;
    // this.loginModel = new LoginModel();
    this.getPaperMaster();
    
  }

  getPaperMaster() {
    debugger;
    this.apiCallingService.getPaperMaster().subscribe((res) => {
      debugger;
      this.result = res;
      debugger;
    });
    debugger;
  }
  

  home() { }

  LogOut() { }
}
