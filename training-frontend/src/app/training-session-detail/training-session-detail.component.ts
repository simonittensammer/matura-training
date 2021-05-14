import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TrainingSession} from '../models/training-session';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-training-session-detail',
  templateUrl: './training-session-detail.component.html',
  styleUrls: ['./training-session-detail.component.scss']
})
export class TrainingSessionDetailComponent implements OnInit {

  trainingSession: TrainingSession;

  constructor(
    private route: ActivatedRoute,
    public httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.getTrainingSessionById(this.route.snapshot.params.id).subscribe(data => {
      this.trainingSession = data;
    });
  }
}
