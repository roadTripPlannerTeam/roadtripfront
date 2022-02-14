import {Injectable, EventEmitter} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import * as mapboxgl from 'mapbox-gl' ;
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MapCustomService {


  mapbox = ( mapboxgl as typeof mapboxgl )
  map!: mapboxgl.Map;
 
  
  
  constructor(private http : HttpClient ) {
    this.mapbox.accessToken = environment.mapKey ;  

  }


  //  return city with query choosed  
  search_word(query: string) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.http.get(url + query + '.json?&access_token='
    + environment.mapKey)
    .pipe(map((res: any) => {
      console.log( res);
      // return only features from res object by using ( map  ) .  
      return res.features
    }));
  }


  // récupérer tableau de coords et le sortir en coordinates =  lat1,long1 ; lat2 , long2
  direction(allCoordinates: Array<any>){
    let coordinates = '';
    console.log(allCoordinates);
    
    allCoordinates.forEach((latlong,index) => {
      coordinates += latlong[0] + ','+ latlong[1]
      console.log(coordinates);
      
      if(index !== allCoordinates.length -1){
        coordinates += ';'
      }
    });

    // envoyer coordinates dans une requete api 
    return this.http.get('https://api.mapbox.com/directions/v5/mapbox/driving/'+
      coordinates + '?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&'+
     'access_token=' + environment.mapKey)
  }
  



}

