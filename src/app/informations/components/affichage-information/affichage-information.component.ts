import { Component, OnInit } from '@angular/core';
import { mapPositions } from 'src/app/models/mapPositions';
import { MapCustomServiceService } from 'src/app/services/map-custom-service.service';

@Component({
  selector: 'app-affichage-information',
  templateUrl: './affichage-information.component.html',
  styleUrls: ['./affichage-information.component.scss']
})
export class AffichageInformationComponent implements OnInit {

  mapPositions: mapPositions[] = [];
  startLat!: number;
  startLng!: number;
  startCoordinate: string = "";
  startCountry: string = "";
  endCity: string = "";

  endLat!: number;
  endLng!: number;
  destinationCoordinate: string = "";

  constructor(private mapService: MapCustomServiceService) { }

  ngOnInit(): void {
    this.getPosition();
  }

  // function for look bdd map positions
  getPosition() {
    this.mapService.findAll().subscribe(
      {
        next: (data) => {
          this.mapPositions = data;
          console.log(data);

          data.forEach((stage: any) => {

            for (const [key, value] of Object.entries(stage.stages)) {

              let key1 = Object.keys(stage.stages);

              let keyDeparture = key1[0];
              
              let finalKey= key1[key1.length-1];

              //premier element du tableau
              this.startLat = stage.stages[keyDeparture].position.latitude;
              this.startLng = stage.stages[keyDeparture].position.longitude;
              this.startCoordinate = this.startLng + "," + this.startLat;
              this.startCity(this.startCoordinate);

              // end stages : 
              this.endLat = stage.stages[finalKey].position.latitude;
              this.endLng = stage.stages[finalKey].position.longitude;
              this.destinationCoordinate = this.endLng + "," + this.endLat;
              this.destinationCity(this.destinationCoordinate);
            }
          })
        },
        error: err => console.error(err),
        complete: () => console.log("oki")
      }
    )
  }

  //Function for read the city of departure
  startCity(start: string): any {
    return this.mapService.findFirst(start).subscribe(
      data => {
        console.log("data city ", data);

        this.startCountry = data.features[0].context[1].text;
      }
    )
  }

  destinationCity(endCity: string) {
    this.mapService.findDestination(endCity).subscribe(
      data => {
        this.endCity = data.features[0].context[1].text
      }
    )
  }



}
