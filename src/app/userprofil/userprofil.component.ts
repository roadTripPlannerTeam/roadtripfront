import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userprofil',
  templateUrl: './userprofil.component.html',
  styleUrls: ['./userprofil.component.scss']
})
export class UserprofilComponent implements OnInit {

  faArrowLeft = faArrowLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
