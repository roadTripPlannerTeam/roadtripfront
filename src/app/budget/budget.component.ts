import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
 
  sum:any=0
  totalSum : number =0;
  expenseSum:number=0;
  zeroAmount: boolean = false;
  hideAddExpense: boolean = false;
  hideModifyBudget: boolean = false;

  public formBudgetAmount: FormGroup = new FormGroup({
    initialAmount: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  addBudget(count:any){
    console.log(count);
    this.sum=count;
    this.totalSum = count;  
  }

  addExpense(expense:any){
    if(this.sum-expense >=0){
      this.sum = this.sum-expense;
    }else{
      this.zeroAmount = true;
    }
    this.hideAddExpense = false;
  }

  showAddExpense() {
    this.hideAddExpense = true;
  }

  modifyBudget(newBudget: any) {
    this.sum = parseInt(this.sum )+ parseInt( newBudget);
    this.hideModifyBudget = false;
  }

  showModifyBudget() {
    this.hideModifyBudget = true
  }
}