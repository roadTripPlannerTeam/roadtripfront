import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { BudgetService } from '../_services/service-budget/budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent implements OnInit {

  public formBudgetAmount: FormGroup = new FormGroup({
    initialAmount: new FormControl(''),
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: BudgetService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addAmount() {
    
  }
}
