import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TrainingSession} from '../models/training-session';
import {Athlete} from '../models/athlete';
import {Coach} from '../models/coach';

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

  getAllAthlete(): Observable<Array<Athlete>> {
    return this.http.get<Array<Athlete>>(this.SERVER_URL + 'athlete');
  }

  getAllCoach(): Observable<Array<Coach>> {
    return this.http.get<Array<Coach>>(this.SERVER_URL + 'coach');
  }

  getTrainingSessionById(id: number): Observable<TrainingSession> {
    return this.http.get<TrainingSession>(this.SERVER_URL + 'trainingSession/' + id);
  }

  deleteTrainingSession(id: number): Observable<any> {
    return this.http.delete(this.SERVER_URL + 'trainingSession/' + id);
  }

  addTrainingSession(timeStamp: string, athleteId: number, coachId: number): Observable<number> {
    return this.http.post<number>(this.SERVER_URL + 'trainingSession', {
      timeStamp,
      athleteId,
      coachId
    });
  }

  editTrainingSession(id: number, timeStamp: string, athleteId: number, coachId: number): Observable<number> {
    return this.http.put<number>(this.SERVER_URL + 'trainingSession', {
      id,
      timeStamp,
      athleteId,
      coachId
    });
  }
}
