import { Component, OnInit } from '@angular/core';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faSearchLocation = faSearchLocation;
  faMapMarkerAlt = faMapMarkerAlt;
  faLocationArrow = faLocationArrow;
  faHeart = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
