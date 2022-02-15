import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConversionComponent } from './manage-page/conversion/conversion.component';

import {TabViewModule} from 'primeng/tabview';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ProgressBarModule} from 'primeng/progressbar';

import { TabviewManageComponent } from './manage-page/tabview-manage/tabview-manage.component';
import { BudgetComponent } from './budget/budget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodolistFormComponent } from './todolist-page/todolist-form/todolist-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderInformationComponent } from './header-information/header-information.component';
import { AffichageInformationComponent } from './affichage-information/affichage-information.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodolistListComponent } from './todolist-page/todolist-list/todolist-list.component';
import { TodolistPageComponent } from './todolist-page/todolist-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    TabviewManageComponent,
    HeaderInformationComponent,
    AffichageInformationComponent,
    NavbarComponent,
    TodolistListComponent,
    TodolistPageComponent,
    TodolistFormComponent,
    BudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTabsModule,
    InputTextareaModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
