import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  infoCountry: boolean = true;
  infoCity: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideInfoCity(event: boolean) {
    this.infoCountry = event;
    this.infoCity = true;
  }

  hideInfoCountry(event: boolean): void {
    this.infoCity = event;
    this.infoCountry = true;
  }

  summaryOpen(event: boolean): void {

  }

}
