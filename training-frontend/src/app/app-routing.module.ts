import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrainingSessionListComponent} from './training-session-list/training-session-list.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingSessionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
