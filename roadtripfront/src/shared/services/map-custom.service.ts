import {Injectable, EventEmitter} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import * as mapboxgl from 'mapbox-gl' ;
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Observable } from 'rxjs';
import { Itinerary } from '../interfaces/itinerary.interface';


@Injectable({
  providedIn: 'root'
})
export class MapCustomService {
  start : number[] = [-122.662323, 45.523751];
  end : number[] = [-10.6623, 45.523751];

  mapbox = ( mapboxgl as typeof mapboxgl )
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 50.62925
  lng = 3.057256
  zoom = 10;
  bounds =  [
    [-123.069003, 45.395273],
    [-122.303707, 45.612333]
  ];


  constructor(private http : HttpClient  ) {
    this.mapbox.accessToken = environment.mapKey ;  

  }

 
  

// construction map 
buildMap(): Promise<any> {
  /**
   * TODO: Aqui construimos el mapa
   */
  return new Promise((resolve, reject) => {
    try {
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: this.zoom,
        center: [this.lng, this.lat]
      });

      // this.map.addControl(new mapboxgl.NavigationControl())

      /**
       *  TODO: Aqui construimos el input buscador de direcciones
       */
       const geocoder = this.map.addControl(
         new MapboxGeocoder({
             accessToken: mapboxgl.accessToken,
           }));

      // *************
      geocoder.on('result', ($event) => {
        const {result} = $event;
        //geocoder.clear();
        console.log('*********', result)
      })

      resolve({
        map: this.map,
        geocoder
      });

    } catch (e) {
      reject(e);
    }
  });
}
        
      
}  
      

        //   
          // geocoder.on('mousedown', () => console.log("coucou")
          // )

          // const directions = new MapBoxDirection({
          //   accessToken: mapboxgl.accessToken,
          //   unit: 'metric',
          //   profile: 'mapbox/driving',
          //   alternatives: false,
          //   geometries: 'geojson',
          //   controls: { instructions: false },
          //   flyTo: false
          // });
          
          // this.map.addControl(directions, 'top-right');
          // this.map.scrollZoom.enable()



    