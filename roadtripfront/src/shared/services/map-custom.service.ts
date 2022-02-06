import {Injectable, EventEmitter} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import * as mapboxgl from 'mapbox-gl' ;
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'



@Injectable({
  providedIn: 'root'
})
export class MapCustomService {


  mapbox = ( mapboxgl as typeof mapboxgl )
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 50.62925
  lng = 3.057256
  zoom = 10;
  
  
  constructor(private httpClient : HttpClient ) {
    this.mapbox.accessToken = environment.mapKey ;  

  }



  

// construction map 
buildMap(): Promise<any> {

  return new Promise((resolve, reject) => {
        try {
          this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: this.zoom,
            center: [this.lng, this.lat],
          });

        //   const geocoder = this.map.addControl(
        //   new MapboxGeocoder({
        //     accessToken: mapboxgl.accessToken,
        //   }));

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


          resolve({
            map: this.map,
           // geocoder
          
          });

        } catch (e) {
          reject(e);
        }
      });
  }

}

