import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TrainingSession} from '../models/training-session';
import {HttpService} from '../services/http.service';
import {Athlete} from '../models/athlete';
import {Coach} from '../models/coach';
import {FormBuilder} from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-training-session-detail',
  templateUrl: './training-session-detail.component.html',
  styleUrls: ['./training-session-detail.component.scss']
})
export class TrainingSessionDetailComponent implements OnInit {

  trainingSession: TrainingSession;
  athleteList: Array<Athlete>;
  coachList: Array<Coach>;

  trainingSessionForm = this.fb.group({
    timeStamp: [],
    athleteId: [],
    coachId: []
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public httpService: HttpService,
    @Inject(LOCALE_ID) private locale: string,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.httpService.getTrainingSessionById(this.route.snapshot.params.id).subscribe(data => {
      this.trainingSession = data;
      this.trainingSessionForm.setValue({
        timeStamp: this.trainingSession.timeStamp,
        athleteId: this.trainingSession.athlete.id,
        coachId: this.trainingSession.coach.id
      });
    });
    this.httpService.getAllAthlete().subscribe(data => {
      this.athleteList = data;
    });
    this.httpService.getAllCoach().subscribe(data => {
      this.coachList = data;
    });
  }

  save(): void {
    this.httpService.editTrainingSession(
      this.trainingSession.id,
      formatDate(this.trainingSessionForm.value.timeStamp, 'yyyy-MM-dd\'T\'HH:mm:ss', this.locale),
      this.trainingSessionForm.value.athleteId,
      this.trainingSessionForm.value.coachId
    ).subscribe(data => {
      this.router.navigate(['']);
    });
  }
}
