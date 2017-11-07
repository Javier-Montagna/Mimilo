import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from 'app/users/user';
import { LoginStatusValidatorService } from 'app/shared/login-status-validator.service';
import { UserService } from 'app/users/user.service';
import { logInViewModel } from 'app/users/logInViewModel';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginStatusValidatorService]
})

export class AppComponent implements OnInit {
  user: IUser;
  loginForm: FormGroup;
  formSubmitted: boolean = false;
  isUserLogged: boolean = false;
  errorMessage: string = "";
  emailRegex: string = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  modalActions = new EventEmitter<string | MaterializeAction>();

  ngOnInit(): void {
    if (localStorage.getItem("currentUser") != null) {
      this.user = JSON.parse(localStorage.getItem("currentUser"));
      this.isUserLogged = true;
    }
  }

  constructor(
    private _userService: UserService,
    private loginStatusValidatorService: LoginStatusValidatorService,
    private _fb: FormBuilder) {
    this.loginForm = _fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(this.emailRegex)])],
      'password': ['', Validators.required]
    });
  }

  LogIn(value: any): void {
    if (this.loginForm.valid) {
      this.formSubmitted = false;

      var logInModel: logInViewModel = new logInViewModel();
      logInModel.email = this.loginForm.controls['email'].value;
      logInModel.password = this.loginForm.controls['password'].value;

      this._userService.GetUserByEmailAndPassword(logInModel)
        .subscribe(user => {
          this.user = user;
          this.loginStatusValidatorService.updateLogStatus(true);
          this.errorMessage = "";
          this.closeModal();
        },
        error => {
          this.errorMessage = <any>error;
          this.loginForm.reset();
        },
        () => this.isUserLogged = true);
    } else {
      this.formSubmitted = true;
    }
  }

  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

  Salir() {
    localStorage.setItem("currentUser", "");
    this.isUserLogged = false;
  }
}
