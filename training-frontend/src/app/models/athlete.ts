import {Coach} from './coach';
import {Equipment} from './equipment';

export class Athlete {
  id: number;
  name: string;
  personalTrainer: Coach;
  equipmentList: Array<Equipment>;
}
