import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpService} from '../services/http.service';
import {Athlete} from '../models/athlete';
import {Coach} from '../models/coach';
import {formatDate} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-training-session',
  templateUrl: './create-training-session.component.html',
  styleUrls: ['./create-training-session.component.scss']
})
export class CreateTrainingSessionComponent implements OnInit {

  athleteList: Array<Athlete>;
  coachList: Array<Coach>;

  trainingSessionForm = this.fb.group({
    timeStamp: [],
    athleteId: [],
    coachId: []
  });

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    @Inject(LOCALE_ID) private locale: string,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.httpService.getAllAthlete().subscribe(data => {
      this.athleteList = data;
    });
    this.httpService.getAllCoach().subscribe(data => {
      this.coachList = data;
    });
  }

  save(): void {
    this.httpService.addTrainingSession(
      formatDate(this.trainingSessionForm.value.timeStamp, 'yyyy-MM-dd\'T\'HH:mm:ss', this.locale),
      this.trainingSessionForm.value.athleteId,
      this.trainingSessionForm.value.coachId
    ).subscribe(data => {
      this.router.navigate(['']);
    });
  }
}
