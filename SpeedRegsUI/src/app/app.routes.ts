import { Routes } from '@angular/router';
import {SpeedMeterHome} from './speed-meter/speed-meter-home/speed-meter-home';
import {SpeedTicketerHome} from './speed-ticketer-home/speed-ticketer-home';

export const routes: Routes = [

  { path: 'speed-meter', component: SpeedMeterHome },
  { path: 'speed-ticketer', component: SpeedTicketerHome }
];
