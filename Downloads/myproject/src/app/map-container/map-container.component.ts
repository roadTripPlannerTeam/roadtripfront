import { Component, OnInit } from '@angular/core';
import { MapCustomService } from 'src/shared/services/map-custom.service';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent {
  initialLatLong: any
  markers: any[] = [];
  cities: any[] = [];

  pathMarkers: any[] = [];
  source: any  = {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            properties: {},
            coordinates: <[number, number][]>[

            ],
          },
        },
      ],
    },
  };
  coordinates: any;

  constructor(private mapCustomService: MapCustomService){}

  endLocation(event: any){
    // console.log(event); {dep : [lat ,long ],arr : [lat  , long ] ,departName , arriveeName}
    console.log(event);
    
    this.initialLatLong = event;
    this.markers = [event.arrivee, event.depart];
    this.cities = [ [event.arrivee , event.arriveeName] , [event.depart , event.departName]];
    console.log(this.cities);
    
    //console.log(this.markers);
    // (2) [Array(2), Array(2)]
    // 0: (2) [3.18167, 50.69]      --> markers 
    // 1: (2) [3.0575, 50.63194]
    console.log(this.cities);
    
    this.coordinates = []
    
    this.mapCustomService.direction(this.markers).subscribe((res: any)=>{
      console.log(res)
      this.coordinates = res.routes[0].geometry.coordinates; // coordonnée itinerary
      // TODO : peut aussi récupérer distance and duration from res object 
      

      // object to send to the children 
      this.source = {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'LineString',
                properties: {},
                coordinates: <[number, number][]>this.coordinates
              },
            },
          ],
        },
      };
    })
  }






  /**
   * make same thing for two points of departure 
   * @param event 
   */

  location(event: any){
  console.log(event); //[ lng , lat] length : 1
  
    this.pathMarkers = event;
    console.log(this.markers); // start and final points of array 
    
    // here we create new array with all points start , stage (pathmarkers ) and final 
    const markerList = [...[this.markers[0]], ...this.pathMarkers, ...[this.markers[1]]]
    console.log(markerList); // juste pour récupérer la ligne qui relie tous les points 
    console.log( this.pathMarkers);

    // we send to the query and return the coordinates 
    this.mapCustomService.direction(markerList).subscribe((res: any)=>{
      this.coordinates = res.routes[0].geometry.coordinates;
      this.source = {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'LineString',
                properties: {},
                coordinates: <[number, number][]>this.coordinates
              },
            },
          ],
        },
      };
    })
  }

}
