import { TodolistService } from './../../_services/service-todolist/todolist.service';
import {
  Component,
  Injectable,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Todolist } from 'src/app/_models/todolist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist-form',
  templateUrl: './todolist-form.component.html',
  styleUrls: ['./todolist-form.component.scss'],
})
export class TodolistFormComponent implements OnInit {
  // init tableau vide pour la liste des todolist
  listTodolist: Todolist[] = [];

  @Input() todolist!: Todolist;
  @Output() todoSaved = new EventEmitter(false);

  public formTodolist: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });
  addForm: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private service: TodolistService,
    private router: Router
  ) {}

  // Validators pour l'enregistrement de la todolist
  ngOnInit(): void {
    this.formTodolist = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
    this.getData();
  }

  // Method to save the todolist
  // reset the data after submit
  addTodo(): void {
    this.service.create(this.formTodolist.value).subscribe((todolist) => {
      this.todoSaved.emit(true)
    });
  }

  getData() {
    this.service.findAll().forEach((element) => {
      this.listTodolist = element;
      console.log(this.listTodolist);
    });
  }

  create(display: boolean) {
    this.addForm = display;
  }
}
