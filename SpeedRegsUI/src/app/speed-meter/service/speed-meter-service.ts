import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {GeneralTrafficStatsResponse, RegistrationsList, TrafficStatsResponse} from '../model/models';
import {
  SPEED_METER_LIST_ENDPOINT,
  SPEED_METER_STATS_ENDPOINT, SPEED_METER_SUMMARY_ENDPOINT,
  SPEED_METER_URL,
  SPEED_METER_VERSION
} from '../constant/constants';

@Injectable({
  providedIn: 'root'
})
export class SpeedMeterService {

  private http = inject(HttpClient);

  getRegistrationsList(): Observable<RegistrationsList[]>{

    return this.http.get<RegistrationsList[]>(SPEED_METER_URL + SPEED_METER_VERSION+ SPEED_METER_LIST_ENDPOINT);
  }

  getAllRegistrationsStats(): Observable<GeneralTrafficStatsResponse>{

    return this.http.get<GeneralTrafficStatsResponse>(SPEED_METER_URL + SPEED_METER_VERSION+ SPEED_METER_STATS_ENDPOINT);
  }

  getAllRegistrationsSummaryAt(hours: number, minutes: number): Observable<TrafficStatsResponse>{

    return this.http.post<TrafficStatsResponse>(SPEED_METER_URL + SPEED_METER_VERSION+ SPEED_METER_SUMMARY_ENDPOINT,
      {
        hour: hours,
        minute: minutes
       });
  }

}
