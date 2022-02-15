import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todolist } from 'src/app/_models/todolist';
import { TodolistService } from 'src/app/_services/service-todolist/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  getId!: any;
  todolist! : Todolist;
  todolists: Todolist[] = [];

  public formUpdate!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, 
    private todolistService: TodolistService,
   ) { 
    
    }

  ngOnInit(): void {
    // this.getAll();
    // this.getId = this.route.snapshot.paramMap.get('id');
    // console.log(this.getId);
    // this.todolistService.findById(this.getId);
    
    // this.todolistService.findById(this.getId).subscribe(res => {
    //   this.formUpdate.setValue({
    //     title: res['title'],
    //     content: res['content'],
    //   });
    // });
    // this.formUpdate = this.formBuilder.group({
    //   title: [''],
    //   content: [''],
    // })

    // this.route.snapshot.paramMap.get("id");
    // this.todolistService.findById(this.id).subscribe((todolist) => {
    //   this.todolist = todolist;
    //})
  }
  
  // getAll() {
  //   this.todolistService.findAll().subscribe((data: Todolist[]) => {
  //     this.todolists = data;
  //     console.log(this.todolists);
  //   });
  // }

  // updateTodolist() {
    
  //   this.todolistService.update(this.getId, this.formUpdate.value)
  //     .subscribe(() => {
  //       console.log('update!')
        
  //     })
  // }
}
