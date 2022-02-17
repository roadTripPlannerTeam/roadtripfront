import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faSearchLocation = faSearch;
  faStickyNote = faStickyNote;
  faLocationArrow = faLocationArrow;
  faHeart = faHeart;

  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirectTodo(): void {
    this.route.navigate(['/todolists'])
  }

}
