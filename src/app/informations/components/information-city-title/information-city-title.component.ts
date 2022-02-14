import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-information-city-title',
  templateUrl: './information-city-title.component.html',
  styleUrls: ['./information-city-title.component.scss']
})
export class InformationCityTitleComponent implements OnInit {
  public info ="info général";
  public detail_info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis exercitationem accusamus, molestias aliquid delectus veniam inventore dicta cum repellendus numquam, laboriosam tempore. Saepe soluta quam consequatur quas voluptatibus voluptatum consequuntur.";
 
  infoCityTitle: boolean = false;

  @Output() infoCity: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() hour: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() sun: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() car: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }


  ngOnInit(): void {
  }

  infoGeneralCity(){
    this.infoCity.emit(this.infoCityTitle);
  }

  time(){
    this.hour.emit(this.infoCityTitle);
  }

  weather(){
    this.sun.emit(this.infoCityTitle);
  }

  transport(){
    this.car.emit(this.infoCityTitle);

  }

}
