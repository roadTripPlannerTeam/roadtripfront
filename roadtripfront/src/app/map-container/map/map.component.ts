import { Component, Input, OnInit } from '@angular/core';
 import { MapCustomService } from 'src/shared/services/map-custom.service';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
      latitude : number  = 50.62925 ; 
      longitude:  number =  3.057256 ; 

  constructor(private mapCustomService : MapCustomService) {
   }

  ngOnInit(): void {
    this.mapCustomService.buildMap()
      .then((data) => {
        // this.asGeoCoder
         console.log(" data : " ,  data)
     


        console.log('*** TODO BIEN *****');
      })
      .catch((err) => {
        console.log('******* ERROR ******', err);
      });

      
    }}
