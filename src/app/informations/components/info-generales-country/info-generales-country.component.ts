
import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/countrie';

@Component({
  selector: 'app-info-generales-country',
  templateUrl: './info-generales-country.component.html',
  styleUrls: ['./info-generales-country.component.scss']
})
export class InfoGeneralesCountryComponent implements OnInit {

  @Input() oneCount!: Country;

  constructor() { }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id')
  }

}
