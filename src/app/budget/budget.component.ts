import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
 
  @ViewChild('count') public el! : ElementRef<HTMLInputElement>
  sum:any=0
  totalSum : number =0;
  expenseSum:number=0;
  zeroAmount: boolean = false;
  hideAddExpense: boolean = false;
  hideModifyBudget: boolean = false;
  errorAmount :boolean = false ;
  amountForm :boolean = true ;
  expenses: number[] =[];
  showbuttonExpense :boolean = false ;


  public formBudgetAmount: FormGroup = new FormGroup({
    initialAmount: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  addBudget(count:any){
    if (Number(count) && count >0){
      this.sum=count;
      this.totalSum = count; 
      this.errorAmount = false;
      this.amountForm = false ; 
      this.showbuttonExpense= true;
    }else { 
      console.log(" hello ")
      this.sum = 0 ;
      this.el.nativeElement.value = '' ; 
      this.errorAmount = true ; 
      
    }
   
  }

  addExpense(expense:any){
    if(this.sum-expense >=0 && expense > 0 ){
      this.sum = this.sum-expense;
     this.expenses.push(expense)
    }else{
      this.zeroAmount = true;
    }
    this.hideAddExpense = false;
  }

  showAddExpense() {
    this.hideAddExpense = !this.hideAddExpense
  }

  modifyBudget(newBudget: any) {
    this.sum = parseInt(this.sum )+ parseInt( newBudget);
    this.hideModifyBudget = false;
  }

  showModifyBudget() {
    this.hideModifyBudget = true
  }
}