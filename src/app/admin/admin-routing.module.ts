import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './controllers/dashboard/dashboard.component';
import { CategoriesComponent } from './controllers/categories/categories.component';

import { AuthGuard } from './auth/auth.guard';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'categories', component: CategoriesComponent },
          { path: '', component: DashboardComponent }
        ],
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
