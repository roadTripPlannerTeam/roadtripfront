import { ActivatedRoute, Router } from '@angular/router';
import { TodolistService } from './../../_services/service-todolist/todolist.service';
import { Component, Injectable, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todolist } from 'src/app/_models/todolist';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
  title!: string;
  content!: string;

  addForm: Boolean = false;
  modify: Boolean = false;

  formUpdate: FormGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl()
  });

 
  constructor(
    private formBuilder: FormBuilder,
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

   todolistUpdate() {
    this.modify = true;
    this.addForm = false;
    this.saveUpdate();
  }

  saveUpdate() {
    // this.todolistService.findById(this.id).subscribe(res => {
    //   this.formUpdate.setValue({
    //     title: res['title'],
    //     content: res['content'],
    //   });
    // });
    this.formUpdate = this.formBuilder.group({
      title: [''],
      content: [''],
    })
  }

  deleteTodolist(id: string):void {    
    if (window.confirm('Voulez vous supprimer cette todolist?')) {
      this.todolistService.delete(id).subscribe(() => this.showList());
    }
  }

  create() {
     this.addForm = !this.addForm;
  }

  
}
