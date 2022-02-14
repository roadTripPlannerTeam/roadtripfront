import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/countrie';



@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  utc:any="";
  operateur:any="";
  splitString:any="";
  hours:any="";
  minutes:any="";
  timeUtc:any="";
  totalTime :any="";
  addition:any= "+" ;
  soustraction:any= "-" ;
  today: number = Date.now();
  time!: number ;

  @Input() oneCount!: Country;
  
  
  constructor() { }

  ngOnInit(): void {
    this.getOperateur();
    this.getUtcTransforme();
    this.getDateModify();
  
  }
 
    getOperateur(){
      //on récupère la varible contenant l'utc
      this.utc = this.oneCount.timezones[0];
      console.log( this.utc);
      //on split l'ensemble de la chaine de caractère de l'utc
      this.operateur = this.utc.split('')
      //On récupère l'opératuer 
      this.operateur =this.operateur[3]
      console.log(this.operateur);
    }

    getUtcTransforme(){
      //on sépare la chaine de carcatère et l'heure au niveau de l'operateur
      this.splitString = this.utc.split(this.operateur)
      //On sépare l'heure et les minutes
      this.timeUtc = this.splitString[1].split(':');
      //On convertie les heure en seconde
      this.hours = (this.timeUtc[0]-1)*3600;
      //On convertie les minutes en seconde
      this.minutes =this.timeUtc[1]*60;
      //on additionne les heure et les minutes convertie en seconde pour les convertir en millseconde
      this.totalTime = (this.hours+this.minutes)*1000
    }
 
   
    getDateModify(){
      if( this.operateur == this.soustraction) {
        this.time = Date.now() - this.totalTime;
      }else{
        this.time = Date.now() + this.totalTime;
      }
    }


   
}
