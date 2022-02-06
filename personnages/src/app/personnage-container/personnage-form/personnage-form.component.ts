import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnageService } from 'src/shared/services/personnage.service';

@Component({
  selector: 'app-personnage-form',
  templateUrl: './personnage-form.component.html',
  styleUrls: ['./personnage-form.component.scss']
})
export class PersonnageFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private personnageService: PersonnageService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  
  public personnageForm : FormGroup = this.fb.group({
      title: ['', Validators.required],
      key: ['', Validators.required],
      name: ['', Validators.required],
      active: ['', Validators.required],
  })





  ngOnInit(): void {
   
}



public submit(): void {

  this.personnageService.addPersonnage(this.personnageForm.value).subscribe();

//  this.router.navigate(['..'], { relativeTo: this.activatedRoute });

}














}