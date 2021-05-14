import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrainingSessionListComponent} from './training-session-list/training-session-list.component';
import {TrainingSessionDetailComponent} from './training-session-detail/training-session-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingSessionListComponent
  },
  {
    path: 'trainingSession/:id',
    component: TrainingSessionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
