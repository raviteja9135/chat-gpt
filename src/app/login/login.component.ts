import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private appService : AppService,
    private router: Router ) {
  }

  submitForm(form: NgForm) {
    this.appService.getCurrentUserDetails(form.value).subscribe((response) => {
      this.appService.userProfile = response;
      this.router.navigate(['/dashboard']);
    }, error => console.log(error))
  }
}
