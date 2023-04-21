import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userProfile: object | undefined;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.userProfile = this.appService.userProfile
  }
}
