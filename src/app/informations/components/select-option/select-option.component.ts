import { __values } from 'tslib';
import { Country } from 'src/app/models/countrie';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit {
  value: string = "";
 

  @Input()countrie?: Country[];

  @Output() envoiId : EventEmitter<string> = new EventEmitter<string>(); 
  constructor() {

  }

  ngOnInit(): void {
  }


  afficher(event: any) {
    this.value= event.target.value;
    this.envoiId.emit(this.value)
  }


}


