import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnage } from 'src/shared/interfaces/personnage';
import { PersonnageService } from 'src/shared/services/personnage.service';

@Component({
  selector: 'app-personnage-container',
  templateUrl: './personnage-container.component.html',
  styleUrls: ['./personnage-container.component.scss']
})
export class PersonnageContainerComponent implements OnInit {
  public personnages$: Observable<Personnage[]> = this.personnageService.personnages$;

  constructor(private personnageService : PersonnageService) { }

  ngOnInit(): void {
  }

}
