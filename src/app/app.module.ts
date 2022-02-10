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


import { TabviewManageComponent } from './manage-page/tabview-manage/tabview-manage.component';
import { TodolistComponent } from './manage-page/todolist/todolist.component';
import { BudgetComponent } from './manage-page/budget/budget.component';
import { ViewBudgetComponent } from './manage-page/view-budget/view-budget.component';
import { ManageTripComponent } from './manage-page/page/manage-trip/manage-trip.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodolistFormComponent } from './manage-page/todolist-form/todolist-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderInformationComponent } from './header-information/header-information.component';
import { AffichageInformationComponent } from './affichage-information/affichage-information.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    TabviewManageComponent,
    TodolistComponent,
    BudgetComponent,
    ViewBudgetComponent,
    ManageTripComponent,
    TodolistFormComponent,
    HeaderInformationComponent,
    AffichageInformationComponent,
    NavbarComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
