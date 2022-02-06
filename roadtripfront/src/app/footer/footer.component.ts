import { Component, OnInit } from '@angular/core';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faSearchLocation = faSearchLocation;
  faMapMarkerAlt = faMapMarkerAlt;
  faLocationArrow = faLocationArrow;
  faHeart = faHeart;

  
  constructor() { }

  ngOnInit(): void {
  }

}
