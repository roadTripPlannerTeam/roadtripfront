import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-city-title',
  templateUrl: './information-city-title.component.html',
  styleUrls: ['./information-city-title.component.scss']
})
export class InformationCityTitleComponent implements OnInit {
  public info ="info général";
  public detail_info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis exercitationem accusamus, molestias aliquid delectus veniam inventore dicta cum repellendus numquam, laboriosam tempore. Saepe soluta quam consequatur quas voluptatibus voluptatum consequuntur.";
 
 
  constructor() { }


  ngOnInit(): void {
  }

}
