import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardLayoutComponent} from './layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardLayoutComponent,
    // children: [{
    //   path: '',
    //   component: DisclaimerViewComponent
    // }]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
