import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesComponent } from './controllers/categories/categories.component';
import { DashboardComponent } from './controllers/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    CategoriesComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
