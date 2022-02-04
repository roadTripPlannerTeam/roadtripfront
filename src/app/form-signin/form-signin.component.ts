import { TokenStorageService } from './../_services/token-storage.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SigninService } from '../_services/signin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-signin',
  templateUrl: './form-signin.component.html',
  styleUrls: ['./form-signin.component.scss'],
})
export class FormSigninComponent implements OnInit {
  
  bool: boolean = false;
  @Output() Loggedin: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  signinForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  nameUser: string = '';

  constructor(
    private signinService: SigninService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  login(): void {
    const { email, password } = this.signinForm.value;

    this.signinService.signin(email, password).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.Loggedin.emit(this.bool);
        this.nameUser = data.firstName;
        setTimeout(this.goToItineraries.bind(this), 3000);
        
      },
      error: (err) => {
        console.error(err);
        this.isLoginFailed = true;
      },
      complete: () => console.log('utilisateur logé'),
    });
  }

  goToItineraries(): void {
    this.router.navigate(["profil"]);
  }
}