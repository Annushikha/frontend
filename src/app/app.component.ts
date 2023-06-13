import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  dashboard: any = {};
  constructor(
   
    public appService: AppService,
  ) {
  }

  ngOnInit() {
    this.getSettings()
  }

  getSettings() {
    this.appService.getDashboard().subscribe((result: any) => {
      this.dashboard = result;
    })
  }
}
