import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JobService {
  API_URL: string = "api/";

  constructor(private httpClient: HttpClient) { }

  getJobs() {
    return this.httpClient.get(this.API_URL + 'jobs')
  }

  getJob(jobId) {
    return this.httpClient.get(`${this.API_URL + 'jobs'}/${jobId}`)
  }
}
