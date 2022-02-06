import { Component, Input, OnInit } from '@angular/core';
import { Personnage } from 'src/shared/interfaces/personnage';

@Component({
  selector: 'app-personnage-list',
  templateUrl: './personnage-list.component.html',
  styleUrls: ['./personnage-list.component.scss']
})
export class PersonnageListComponent implements OnInit {

  @Input() public personnages: Personnage[] | null = null;
  

  constructor() { }

  ngOnInit(): void {
  }

}
