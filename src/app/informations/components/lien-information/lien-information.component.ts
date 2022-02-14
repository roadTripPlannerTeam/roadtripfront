import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lien-information',
  templateUrl: './lien-information.component.html',
  styleUrls: ['./lien-information.component.scss']
})
export class LienInformationComponent implements OnInit {
  
  infoCityTitle : boolean = false;
  infoCountryTitle : boolean = false;

  @Output() cityHidden :EventEmitter<boolean>= new EventEmitter<boolean>();
  @Output() countryHidden :EventEmitter<boolean>= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  openInfoCountry():void{
    this.cityHidden.emit(this.infoCityTitle);
  }

  openInfoCity(){
    this.countryHidden.emit(this.infoCountryTitle);
  }
}


