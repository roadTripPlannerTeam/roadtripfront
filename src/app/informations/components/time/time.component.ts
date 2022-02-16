
import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';



@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  utc:any="";
  today: number = Date.now();
  destinationName:string="";
  @Input()timezone!:Weather;
  @Input()name!:string;
  
  constructor() { }

  ngOnInit(): void {
    this.getTime();
  }

  getTime(){
    this.utc = Date.now() + this.timezone.timezone*1000-3600000
  }
 
}
