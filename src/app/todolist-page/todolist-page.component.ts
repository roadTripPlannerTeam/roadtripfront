import { Router, ActivatedRoute } from '@angular/router';
import { Todolist } from './../_models/todolist';
import { Observable } from 'rxjs';
import { TodolistService } from './../_services/service-todolist/todolist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist-page',
  templateUrl: './todolist-page.component.html',
  styleUrls: ['./todolist-page.component.scss']
})
export class TodolistPageComponent implements OnInit {



  constructor(
   ) { }

  ngOnInit(): void {

  }


}
