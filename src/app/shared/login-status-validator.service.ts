import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginStatusValidatorService {

    private logStatusSource = new Subject<boolean>();

    constructor(private ngZone: NgZone) {

    }

    logStatus = this.logStatusSource.asObservable();

    updateLogStatus(status: boolean) {
        this.ngZone.run(() => this.logStatusSource.next(status));        
    }
}