import { Component, OnInit } from '@angular/core';
import { ApicallingService } from '../apicalling.service';

@Component({
  selector: 'app-add-shop-profile',
  templateUrl: './add-shop-profile.component.html',
  styleUrls: ['./add-shop-profile.component.css']
})
export class AddShopProfileComponent implements OnInit {

  result:any = [];

  constructor(private apiCallingService: ApicallingService) {debugger; }

  ngOnInit(): void {
    debugger;
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

}
