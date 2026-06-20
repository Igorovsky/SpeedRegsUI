import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {RegistrationsList} from '../model/models';
import {SPEED_METER_ENDPOINT, SPEED_METER_URL, SPEED_METER_VERSION} from '../constant/constants';

@Injectable({
  providedIn: 'root'
})
export class SpeedMeterService {

  private http = inject(HttpClient);

  getRegistrationsList(): Observable<RegistrationsList[]>{

    return this.http.get<RegistrationsList[]>(SPEED_METER_URL + SPEED_METER_VERSION+ SPEED_METER_ENDPOINT);
  }

}
