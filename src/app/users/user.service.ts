import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { IUser } from "./user";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/throw';
import { logInViewModel } from "app/users/logInViewModel";

@Injectable()
export class UserService {
    //private _userUrl: string = "http://mimilowebapi.azurewebsites.net/api/MimiloUser/";
    private _userUrl: string = "http://localhost:5000/api/MimiloUser/";

    constructor(private _http: Http) {
    }

    GetUserByEmailAndPassword(logInUser: logInViewModel): Observable<IUser> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        var Url = this._userUrl + "GetUserByEmailAndPassword";

        return this._http.post(Url, logInUser, options)
            .map((res: Response) => res.json())
            .do(data => {
                console.log("User: " + JSON.stringify(data));
                localStorage.setItem('currentUser', JSON.stringify(data));
            })
            .catch(this.errorHandler);
    }

    registerNewUser(nombre: string, apellido: string, usuario: string, email: string, password: string): Observable<any> {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('nombre', nombre);
        urlSearchParams.append('apellido', apellido);
        urlSearchParams.append('usuario', usuario);
        urlSearchParams.append('email', email);
        urlSearchParams.append('password', password);
        let body = urlSearchParams.toString()

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var Url = this._userUrl + "RegisterNewUser";

        return this._http.post(Url, body, { headers: headers })
            .map((res: Response) => res.json())
            .do(data => console.log("Rest: " + data))
            .catch(this.errorHandler);
    }

    private errorHandler(error: any) {
        var errorMessage = error.json();
        console.log("Error: " + errorMessage.message);
        return Observable.throw(errorMessage.message);
    }
}