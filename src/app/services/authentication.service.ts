import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import { APP_CONFIG, IAppConfig } from '../configs'



@Injectable()
export class AuthenticationService {
    constructor(private _router: Router, private _http: Http, @Inject(APP_CONFIG) private config: IAppConfig) { }

    login(username: string, password: string): string {
        
        let requestUrl = this.config.endpoint.url + "token";
        let requestBody = "username=" + username + "&password=" + password + "&grant_type=password";
        let requestHeader = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let requestOptions = new RequestOptions({ headers: requestHeader });
        this._http.post(requestUrl, requestBody, requestOptions).subscribe(response => {
            if (response.status == 200) {
                let requestTokenResult = response.json();
                localStorage.setItem("authenticated", "true");
                localStorage.setItem("username", username);
                localStorage.setItem("userToken", requestTokenResult.access_token);
            }
            this._router.navigate(['/dashboard']);
            return "";
        },
            error => {
                if (error.json().error == "invalid_grant") {
                    return "invalid_grant";
                }
            },
            () => { console.log("Request done!") });
        return "";
    }
    logout(): void {

    }
}