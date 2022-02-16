import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  public formBudgetAmount: FormGroup = new FormGroup({
    initialAmount: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
