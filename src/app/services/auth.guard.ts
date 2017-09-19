import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate() {
        let authenticated: boolean = localStorage.getItem("authenticated") != "true" ? false : true;
        if (authenticated) {
            return true;
        }
        this.router.navigate(['/pages/login']);
        return false;
    }
}
