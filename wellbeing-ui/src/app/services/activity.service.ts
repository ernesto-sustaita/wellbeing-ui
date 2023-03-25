import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../models/activity';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class ActivityService {
 
  baseURL: string = "https://localhost:7232/api/";
 
  constructor(private http: HttpClient) {
  }
 
  getActivities(): Observable<Activity[]> {
    console.log('getActivities '+this.baseURL + 'Activity')
    return this.http.get<Activity[]>(this.baseURL + 'Activity')
  }
 
  addActivity(activity:Activity): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(activity);
    console.log(body)
    return this.http.post(this.baseURL + 'Activity', body,{'headers':headers})
  }
 
}