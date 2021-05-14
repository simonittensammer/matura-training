import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TrainingSession} from '../models/training-session';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private SERVER_URL = 'http://localhost:8080/api/';

  constructor(
    private http: HttpClient
  ) { }

  getAllTringingSession(): Observable<Array<TrainingSession>> {
    return this.http.get<Array<TrainingSession>>(this.SERVER_URL + 'trainingSession');
  }

  getTrainingSessionById(id: number): Observable<TrainingSession> {
    return this.http.get<TrainingSession>(this.SERVER_URL + 'trainingSession/' + id);
  }

  deleteTrainingSession(id: number): Observable<any> {
    return this.http.delete(this.SERVER_URL + 'trainingSession/' + id);
  }
}
