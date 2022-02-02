import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../_services/signup.service';

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.scss'],
})
export class FormSignupComponent implements OnInit {
  userForm: FormGroup;

  constructor(private signupService: SignupService) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthday: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  createUser(): void {
    this.signupService.create(this.userForm.value).subscribe({
      next: () => null,
      error: (err) => console.error(err),
      complete: () => console.log('utilisateur enregistré')
    });
  }
}
