import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-country-title',
  templateUrl: './information-country-title.component.html',
  styleUrls: ['./information-country-title.component.scss']
})
export class InformationCountryTitleComponent implements OnInit {
  public info ="info général";
  public detail_info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis exercitationem accusamus, molestias aliquid delectus veniam inventore dicta cum repellendus numquam, laboriosam tempore. Saepe soluta quam consequatur quas voluptatibus voluptatum consequuntur.";
 
 
  constructor() { }

  ngOnInit(): void {
  }



}
