import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-information',
  templateUrl: './header-information.component.html',
  styleUrls: ['./header-information.component.scss']
})

export class HeaderInformationComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faUser = faUser;
  infoTitle: boolean = false;

  @Output() cityOpen : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {}

  cityTitleOpen(){
    this.cityOpen.emit(this.infoTitle);
  }

}