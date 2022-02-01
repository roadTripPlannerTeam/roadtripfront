import { Component, OnInit } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.scss']
})
export class HeaderAuthComponent implements OnInit {

  faGlobe = faGlobe;

  constructor() { }

  ngOnInit(): void {
  }

}
