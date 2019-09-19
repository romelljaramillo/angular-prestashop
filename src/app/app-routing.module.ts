import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './admin/auth/auth.guard';
import { LoginComponent } from './admin/auth/login/login.component';


const approutes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuard]
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: '', 
    redirectTo: '', 
    pathMatch: 'full' },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
