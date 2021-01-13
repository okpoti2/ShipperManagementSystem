import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consignment } from '../model/consignment';

let headers = new HttpHeaders().set('access-control-allow-origin',"http://192.168.0.80:8000/")

@Injectable({
  providedIn: 'root'
})


export class ConsignmentService {
  API_URL: string = "http://192.168.0.80:8000/";
  
  constructor(private httpClient: HttpClient) { }

  getConsignments(): Observable<Consignment[]> {
    return this.httpClient.get<Consignment[]>(this.API_URL + 'consignment?format=json&uicontext=detail')
  }

  getConsignment(consignmentId) {
    return this.httpClient.get<Consignment[]>(`${this.API_URL + 'consignment'}/${consignmentId}`)
  }
}
