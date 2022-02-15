import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GeoJSONSourceRaw, LngLatBounds } from 'mapbox-gl';
import { debounceTime, distinctUntilChanged, Observable, Subscription } from 'rxjs';
import { MapCustomService } from 'src/shared/services/map-custom.service';
import { LayerComponent, MapService } from 'ngx-mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit ,OnChanges{
  @Input() source: any
  @Input() markers: any = [];
  @Input() cities: any = [];

  

  
  @Input() pathMarkers: any = [];
  bounds!: LngLatBounds;
  @ViewChild('layer') layer!: any;
  
  value="";
  subscription!: Subscription;
  inputForm!: FormGroup
  places!: Observable<any[]>;
  input = new FormControl();
  access: any= true;
  constructor(private mapCustomService: MapCustomService){}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['source'] ) {
      this.reset()
      // this.zoomToBounds()
      }
  }

  ngOnInit(): void {
    
    this.subscription = this.input.valueChanges
    .pipe(debounceTime(1000), distinctUntilChanged())
    .subscribe(res => {
      console.log("res : " + res)
      this.searchInp(res)
    });
  }


  searchInp(event: any) {
    const searchTerm = event.toLowerCase();
    console.log("res : " + event)

    if (!!searchTerm && searchTerm.length > 0) {
      this.places = this.mapCustomService.search_word(searchTerm)
    }
  }



  zoomToBounds() {
    const coordinates = this.source.data.features[0].geometry.coordinates;
    //console.log("coordinates" + coordinates);
    
    this.bounds = coordinates.reduce((bounds: any, coord: any) => {
    //  console.log("bounds : "+ bounds ," , coord "+  coord);
      
      return bounds.extend(<any>coord);
    }, new LngLatBounds(coordinates[0], coordinates[0]));
  }

  reset(){
    if(this.layer == undefined ){
      return 
    }else{
      this.layer.MapService.removeSource('LineString')
    }
  }
}

