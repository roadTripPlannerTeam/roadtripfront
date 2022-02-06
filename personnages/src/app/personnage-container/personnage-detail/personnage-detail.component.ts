import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Personnage } from 'src/shared/interfaces/personnage';
import { PersonnageService } from 'src/shared/services/personnage.service';

@Component({
  selector: 'app-personnage-detail',
  templateUrl: './personnage-detail.component.html',
  styleUrls: ['./personnage-detail.component.scss']
})
export class PersonnageDetailComponent implements OnInit {
  public  personnage? : Personnage  

  constructor( private personnageService: PersonnageService,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        const personnageIndex = paramMap.get('index');
        if (personnageIndex) {
          this.personnageService
            .getPersonnage(+personnageIndex)
            .subscribe((personnage: Personnage) => {
              this.personnage = personnage;
            });
        }
      });
    }

}
