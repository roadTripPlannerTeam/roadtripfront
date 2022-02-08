import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MapCustomService } from 'src/shared/services/map-custom.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  latitude: number = 50.62925;
  longitude: number = 3.057256;

  constructor(private mapCustomService: MapCustomService, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    this.mapCustomService.buildMap()
      .then(({  map }) => {
        console.log('*** TODO BIEN *****');
      })
      .catch((err) => {
        console.log('******* ERROR ******', err);
      });
  }
}