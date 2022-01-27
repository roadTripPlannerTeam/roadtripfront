
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService } from '../_services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.scss']
})
export class FormSignupComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    birthday: new FormControl(''),
    password: new FormControl(''),
  });

  service: SignupService;
  routeur: Router;

  constructor(service: SignupService, router: Router){
    this.service = service;
    this.routeur = router;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.service.save(this.userForm.value).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log("marche po");
      }
    )
  }
}
