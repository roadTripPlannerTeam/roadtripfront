import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/countrie';

@Component({
  selector: 'app-condition-general-country',
  templateUrl: './condition-general-country.component.html',
  styleUrls: ['./condition-general-country.component.scss']
})
export class ConditionGeneralCountryComponent implements OnInit {

  @Input()countrie!: Country[];
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
