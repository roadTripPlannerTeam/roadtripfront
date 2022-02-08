import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import { map } from 'rxjs';
import { MapCustomService } from 'src/shared/services/map-custom.service';


@Component({
  selector: 'app-form-map-destination',
  templateUrl: './formapdestination.component.html',
  styleUrls: ['./formapdestination.component.scss']
})
export class FormapdestinationComponent implements OnInit {
  formattedaddress = " ";
  options: any = {
    componentRestrictions: {
      country: ["AU"]
    },
    bounds: null,
    types: null,
    fields: null,
    strictBounds: null,
    origin: null
  }

  markers: object[] = [];

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private service: MapCustomService
  ) {
  }

  public mapDestinationForm: FormGroup = this.fb.group({
    depart: [null, Validators.required],
    arrivee: [null, Validators.required],
  })

  ngOnInit(): void {
    this.mapDestinationForm.get("depart")?.valueChanges.subscribe(e => {
      let oldValue = this.mapDestinationForm.value.depart
      let newValue = e
      if (oldValue !== newValue) {
        this.getMarker(newValue);
      }
    })
    this.mapDestinationForm.get("arrivee")?.valueChanges.subscribe(e => {
      let oldValue = this.mapDestinationForm.value.depart
      let newValue = e
      if (oldValue !== newValue) {
        this.getMarker(newValue);
      }
    })
  }


  public submit(): void {
    // console.log(this.mapDestinationForm.value)
  }

  private getMarker(address: string) {
    this.markers.forEach((marker: any) => {
      marker.remove();
    })
    this.service.forwardGeocoding(address).subscribe((result: any) => {
      this.markers.push(new mapboxgl.Marker().setLngLat(result.features[0].geometry.coordinates).addTo(this.service.getMap()))
    })
  }

}
