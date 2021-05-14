import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {TrainingSession} from '../models/training-session';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-training-session-list',
  templateUrl: './training-session-list.component.html',
  styleUrls: ['./training-session-list.component.scss']
})
export class TrainingSessionListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'timeStamp', 'athlete', 'coach', 'delete'];
  private trainingSessionList: Array<TrainingSession>;
  dataSource: MatTableDataSource<TrainingSession>;

  constructor(
    public httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.getAllTringingSession().subscribe(data => {
      this.trainingSessionList = data;
      this.dataSource = new MatTableDataSource<TrainingSession>(this.trainingSessionList)
    });
  }

  delete(id: number): void {
    this.httpService.deleteTrainingSession(id).subscribe(() => {
      this.httpService.getAllTringingSession().subscribe(data => {
        this.trainingSessionList = data;
        this.dataSource = new MatTableDataSource<TrainingSession>(this.trainingSessionList)
      });
    });
  }

  reload(): void {
    window.location.reload();
  }
}
