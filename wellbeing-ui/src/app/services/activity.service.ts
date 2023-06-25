import { HttpClient } from '@angular/common/http';
import { Activity } from '../models/activity';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyMeditationTime } from '../dto/dailyMeditationTime.out';

@Injectable({providedIn:'root'})
export class ActivityService {

  baseURL: string = "https://localhost:7232/api/";

  constructor(private http: HttpClient) {
  }

  getActivities(): Observable<Activity[]> {
    console.log('getActivities '+this.baseURL + 'Activity')
    return this.http.get<Activity[]>(this.baseURL + 'Activity')
  }

  getActivitiesByDate(startDate: string, endDate: string): Observable<Activity[]> {
    console.log('getActivities '+this.baseURL + 'Activity/' + startDate + '/' + endDate)
    return this.http.get<Activity[]>(this.baseURL + 'Activity/' + startDate + '/' + endDate)
  }

  getDailyMeditationTimeByDateInterval(startDate: string, endDate: string): Observable<DailyMeditationTime[]> {
    console.log('getActivities '+this.baseURL + 'Activity/' + startDate + '/' + endDate)
    return this.http.get<DailyMeditationTime[]>(this.baseURL + 'Activity/meditation/time/' + startDate + '/' + endDate)
  }

  addActivity(activity:Activity): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(activity);
    console.log(body)
    return this.http.post(this.baseURL + 'Activity', body,{'headers':headers})
    // .pipe(
    //   catchError((err) => {
    //     console.error(err);
    //     throw err;
    //   }));
  }
}
