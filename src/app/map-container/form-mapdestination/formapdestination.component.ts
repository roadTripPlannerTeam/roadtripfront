import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subscription } from 'rxjs';
import { MapCustomService } from 'src/shared/services/map-custom.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LngLat } from 'mapbox-gl';
import { CrudService } from 'src/shared/services/crud-service.service';
import { Position } from '../../../shared/models/position';
import { ItineraryService } from 'src/shared/services/itinerary.service';
import { Itinerary } from 'src/shared/models/itinerary';
import { StageService } from 'src/shared/services/stage.service';
import { Stage } from 'src/shared/models/stage';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';




import * as _moment from 'moment';
import { defaultFormat as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-form-map-destination',
  templateUrl: './formapdestination.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  styleUrls: ['./formapdestination.component.scss']
})
export class FormapdestinationComponent implements OnInit {
  @Output() endLocation = new EventEmitter();
  @Output() locations = new EventEmitter();
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
  dateStageDeparture!: Date
  dateStageArrived!: Date
  departurePosition: string = ""
  arriveePosition: string = ""
  itineraryId: string = ""
  subscription!: Subscription;
  inputForm!: FormGroup;
  departPlaces!: Observable<any[]>;  // stock res.features array ( departure list of autocompletion)
  arrivalPlaces!: Observable<any[]>; // stock res.features array (arrival  list of autocompletion)
  placeList!: Observable<any[]>; // for stage points  . 
  location = new FormControl('');
  arriveeLatLong: any; // second point to push on the map 
  departLatLong: any; // point to install on the map 
  selectedLocation: any = null;
  allLocation: any = [];
  markers: any = [];
  modalItem: any;
  showLocationAdd: boolean = false;
  showDateChooser: boolean = false;
  showMapDestination: boolean = true;
  modelItemIndex!: number;
  currentDialog!: MatDialogRef<any>;
  departName: string = "";
  arriveeName: string = "";

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private mapCustomService: MapCustomService,
    public dialog: MatDialog,
    private positionService: CrudService,
    private itineraryService: ItineraryService,
    private stageService: StageService
  ) { }

  // destination form 
  public mapDestinationForm: FormGroup = this.fb.group({
    departure: ['', Validators.required],
    arrival: ['', Validators.required],
  })
  // date form 
  public dateChooseForm: FormGroup = this.fb.group({
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  })

  // stage form 
  markerSetForm: FormGroup = this.fb.group({
    location: ['', Validators.required],
    date: ['', Validators.required],
  })


  ngOnInit(): void {
    this.mapDestinationForm.controls['departure'].valueChanges

      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(res => {

        if (!!res && res.length > 0) {
          this.searchInp(res, 'depart')
        }
      });
    // make same thing to arrival input 
    this.mapDestinationForm.controls['arrival'].valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(res => {
        if (!!res && res.length > 0) {
          this.searchInp(res, 'arrivee')
        }
      });



    // same thing for stage input 
    this.markerSetForm.controls['location'].valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(res => {
        if (!!res && res.length > 0) {
          this.searchInp(res, '')
        }
      });
  }


  /**
   * function to return array of list of city to push it on auto complete input
   * @param event the entry of input lower case (query)
   * @param mapType (distinct between depart arrival or other)
   */
  searchInp(event: any, mapType: string) {
    const searchTerm = event.toLowerCase();
    if (mapType === 'depart') {
      this.departPlaces = this.mapCustomService.search_word(searchTerm)
    } else if (mapType === 'arrivee') {
      this.arrivalPlaces = this.mapCustomService.search_word(searchTerm)
    } else {
      this.placeList = this.mapCustomService.search_word(searchTerm)
    }
  }



  public AddressChange(address: any) {
    //setting address from API to local variable
    this.formattedaddress = address.formatted_address
  }


  /**
   * function give him name of city and return lng lat coordinates with event.center
   * @param event city change from list of autocompletion places .
   * @param mapType disctinct if it s arrival departure or other . 
   */
  optionSelected(event: any, mapType: string) {
    if (mapType === 'depart') {
      this.departLatLong = event.center
      this.departName = event.text.toLowerCase()

    } else if (mapType === 'arrivee') {
      this.arriveeLatLong = event.center
      this.arriveeName = event.text.toLowerCase()

    } else {
      this.selectedLocation = event
      //ensuite passe addLcation
    }
  }

  /**
   *  function to transfer array to json before sending to the back 
   * @param data array 
   * @return an object Position type . 
   */

  ArrayTojsondata(data: any[]): Position {
    let sendObject;
    let value1 = data[0]
    let value2 = data[1]
    return sendObject = { longitude: value1, latitude: value2 }
  }


  // TODO : gérer le user  . <----------------
  itineraryJson(): Itinerary {
    return {
      title: `itinerary from ${this.departName} to ${this.arriveeName}`,
      user: { id: "62092e3e591ab07d303b70c8" }
    }
  }

  /**
   * when submit destination form you send data with output to the parent
   */
  mapDestinationSubmit() {

    if (this.departLatLong.length && this.arriveeLatLong.length) {
      this.showMapDestination = false; // hide destination form 
      this.showDateChooser = true; // display date form

      const itineraryJson = this.itineraryJson();
      this.itineraryService.create(itineraryJson).subscribe((res: any) => {
        console.log("itinerary created  : ", res);
        this.itineraryId = res.id;
      })


      const departurePosition = this.ArrayTojsondata(this.departLatLong)
      this.positionService.create(departurePosition).subscribe((res: any) => {
        console.log("create departure position db : ", res);
        this.departurePosition = res.id
      })

      const arrivedPosition = this.ArrayTojsondata(this.arriveeLatLong)
      this.positionService.create(arrivedPosition).subscribe((res: any) => {
        console.log("create arrived position db : ", res);
        this.arriveePosition = res.id;
      })


      this.endLocation.emit({   // emit data lnglat to parent 
        depart: this.departLatLong,
        arrivee: this.arriveeLatLong,
        departName: this.departName,
        arriveeName: this.arriveeName
      })
    }
  }


  stageJson(stageName: string, position: string, stageDate: Date, itinerary: string): Stage {
    return { name: stageName, position: position, date: stageDate, itinerary: itinerary }
  }


  /**
   * juste changer le form à afficher 
   */
  dateChooseSubmit() {
    console.log(this.dateChooseForm);

    if (this.dateChooseForm.valid) {
      this.showDateChooser = false;
      this.showLocationAdd = true;

      this.dateStageDeparture = this.dateChooseForm.value.startDate;
      const test: _moment.Moment = this.dateChooseForm.value.startDate;
      test.set({hour:1,minute:0,second:0,millisecond:0})
      console.log("toto", test.toISOString())

      this.dateStageArrived = this.dateChooseForm.value.endDate;


      const stageDepature = this.stageJson(`stage departure : ${this.departName}`, this.departurePosition, this.dateStageDeparture, this.itineraryId)

      this.stageService.create(stageDepature).subscribe((res) => {
        console.log("stage Departure : ", res);


        const stageArrived = this.stageJson(`stage Arrived : ${this.arriveeName}`, this.arriveePosition, this.dateStageArrived, this.itineraryId)

        this.stageService.create(stageArrived).subscribe((res) => {
          console.log("stage Departure : ", res);
          console.log(res.date)

        })

      })

    }
  }


  /**
   * 
   */
  addLocation() {
    // vérifie si on a objet et si form est valid 
    if (!!this.selectedLocation && this.markerSetForm.valid) {

      this.allLocation.push({
        name: this.selectedLocation.text,
        date: this.markerSetForm.value.date // récupére la date 
      })
      this.markers.push(this.selectedLocation.center)
      this.locations.emit(this.markers)
      console.log(this.markers); // lntlat

      this.selectedLocation = null;
      this.markerSetForm.reset() // reset form  . 
    }
  }

  openDialog(popupModal: any): void {
    this.currentDialog = this.dialog.open(popupModal);
  }

  onListItemClick(item: any, templateRef: any, index: number) {
    console.log(item);
    console.log(templateRef);

    this.modalItem = item;
    this.modelItemIndex = index
    this.openDialog(templateRef)
  }

  removeLocation() {

    this.markers.splice(this.modelItemIndex, 1)
    this.locations.emit(this.markers)
    this.allLocation.splice(this.modelItemIndex, 1)
    this.currentDialog.close()
  }
}



