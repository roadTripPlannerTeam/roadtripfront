import { ActivatedRoute, Router } from '@angular/router';
import { TodolistService } from './../../_services/service-todolist/todolist.service';
import { Component, Injectable, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todolist } from 'src/app/_models/todolist';

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styleUrls: ['./todolist-list.component.scss']
})

export class TodolistListComponent implements OnInit {
  @Input() list!: Todolist[];
  todolists: Todolist[] = [];
  selectTodolist!: Todolist;
  id!: string;
  addForm: Boolean = false;
  modify: Boolean = false;
 
  constructor(
    private todolistService: TodolistService, 
    private router: Router) {
     }

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.todolistService.findAll().subscribe((data: Todolist[]) => {
      this.todolists = data;
      console.log(this.todolists);
    });
  }

  onSelect(todolist: Todolist) {
    this.selectTodolist = todolist;
  }

   todolistUpdate(display: boolean) {
    this.modify = display;
    
  }

  deleteTodolist(id: string):void {    
    if (window.confirm('Voulez vous supprimer cette todolist?')) {
      this.todolistService.delete(id).subscribe(() => this.showList());
    }
  }

  create(display: boolean) {
     this.addForm = display;
  }

}
