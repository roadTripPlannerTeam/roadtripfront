import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.scss'],
})
export class FormUpdateComponent implements OnInit {

  updateForm: FormGroup = this.initForm();
  user!: User;

  constructor() {}

  ngOnInit(): void {
    this.user = this.recupUserData();
    this.updateForm = this.initForm(this.user);
  }

  /**
   * Va récupérer les infos du user dans le session storage
   */
  recupUserData(): User {
    return JSON.parse(sessionStorage.getItem('auth-user') || '{}');
  }

  private initForm(user: User = {

    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    profilPicture: ''
    }): 

  FormGroup {
    return new FormGroup({
      firstName: new FormControl(user.firstName, [Validators.required]),
      lastName: new FormControl(user.lastName, [Validators.required]),
      email: new FormControl(user.email, [Validators.required, Validators.email]),
      birthday: new FormControl(user.birthday, [Validators.required]),
      password: new FormControl('           ', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}