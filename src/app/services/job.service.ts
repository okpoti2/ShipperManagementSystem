import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Job} from '../model/job'

@Injectable({
  providedIn: 'root'
})
export class JobService {
  API_URL: string = "api/";

  constructor(private httpClient: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.API_URL + 'jobs')
  }

  getJob(jobId) {
    return this.httpClient.get<Job[]>(`${this.API_URL + 'jobs'}/${jobId}`)
  }
}
