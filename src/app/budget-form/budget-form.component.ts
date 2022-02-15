import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BudgetService } from '../_services/service-budget/budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent implements OnInit {
  @Output() amountSaved = new EventEmitter(false);

  public formBudgetAmount: FormGroup = new FormGroup({
    initialAmount: new FormControl(''),
  })

  constructor(
    private formBuilder: FormBuilder,
    private service: BudgetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formBudgetAmount = this.formBuilder.group({
      initialAmount: ['', Validators.required]
    })
  }

  // add amount 
  addAmount() {
    this.service.create(this.formBudgetAmount.value).subscribe(() => {
      this.amountSaved.emit(true);
    })
  }

}
