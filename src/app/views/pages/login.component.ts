import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private authenticationService: AuthenticationService) { }
  login() {
    this.authenticationService.login(this.username, this.password);
  }
}
