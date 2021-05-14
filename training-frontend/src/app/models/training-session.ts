import {Athlete} from './athlete';
import {Coach} from './coach';

export class TrainingSession {
  id: number;
  timeStamp: Date;
  athlete: Athlete;
  coach: Coach;
}
