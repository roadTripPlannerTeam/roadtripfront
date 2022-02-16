import { Component,  OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-information-country-title',
  templateUrl: './information-country-title.component.html',
  styleUrls: ['./information-country-title.component.scss']
})
export class InformationCountryTitleComponent implements OnInit {
  public info ="info général";
  public detail_info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis exercitationem accusamus, molestias aliquid delectus veniam inventore dicta cum repellendus numquam, laboriosam tempore. Saepe soluta quam consequatur quas voluptatibus voluptatum consequuntur.";
 
  infoCountryTitle: boolean = false;

  @Output() condition: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() motcles: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  conditionGenerale(){
    this.condition.emit(this.infoCountryTitle);
  }

  motcle(){
    this.motcles.emit(this.infoCountryTitle);
  }

}
