import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form-map-destination',
  templateUrl: './formapdestination.component.html',
  styleUrls: ['./formapdestination.component.scss']
})
export class FormapdestinationComponent implements OnInit {
  formattedaddress=" ";
  options:any = {
    componentRestrictions:{
      country:["AU"]
    },
    bounds: null,
    types: null,
     fields:null,
      strictBounds: null,
       origin:null
  }

  constructor(
    private fb: FormBuilder,
   // private personnageService: PersonnageService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  
  public mapDestinationForm : FormGroup = this.fb.group({
      depart: ['Départ', Validators.required],
      arrivee: ['Destination', Validators.required],

  })

  
  
  
  ngOnInit(): void {
    
  }

 
  public AddressChange(address: any) {
  //setting address from API to local variable
   this.formattedaddress=address.formatted_address
}

  
 

public submit(): void {

  console.log(this.mapDestinationForm.value)


}


}
