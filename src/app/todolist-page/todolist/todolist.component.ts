import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todolist } from 'src/app/_models/todolist';
import { TodolistService } from 'src/app/_services/service-todolist/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  id!: string;
  todolist! : Todolist;
  todolists: Todolist[] = [];
  @Input() newTitle!: string;
  @Input() newContent!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private todolistService: TodolistService) { 
      this.id = this.route.snapshot.params['id'];
    }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //     this.todolistService.findById(this.id)
    //     .subscribe((todolist: Todolist) => {
    //       this.todolist = todolist;
    //     })
    //   });

    // this.id = this.route.snapshot.params['id'];
    // this.todolistService.findById(this.id)
    // .subscribe(todolist => this.todolist = todolist)
  }
  getById() {
    this.todolistService.findById(this.id).subscribe(() => {
     this.todolist;
    })
  }

  getAll() {
    this.todolistService.findAll().subscribe((data: Todolist[]) => {
      this.todolists = data;
      console.log(this.todolists);
    });
  }

  updateTodolist() {
    this.todolistService.update(this.id, this.todolist)
      .subscribe(() => {
        this.getAll();
      });
  }

  goBack() {
    //this.router.navigate(['todolists/list']);
  }
}
