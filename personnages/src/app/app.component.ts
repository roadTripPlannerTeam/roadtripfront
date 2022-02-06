import { Component, OnInit } from '@angular/core';
import { PersonnageService } from 'src/shared/services/personnage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private cocktailService: PersonnageService) {}

  ngOnInit() {
    this.cocktailService.fetchPersonnage().subscribe();
  }
}