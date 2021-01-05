import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

    let  jobs =  [
      {  id: 1, containerNumber:  'TTNU8492121', shipper:'Josephine', line:'Hapag', departure:'15/03/2020', arrival:'13/04/2020', 
      vessel:'Genoa Express', status:true, jobDate:'03/03/2020',receiptNumber:'KRW202003001' },
      {  id: 2, containerNumber:  'HLBU9297933', shipper:'Rexfield', line:'Hapag', departure:'17/03/2020', arrival:'24/04/2020', 
      vessel:'Vivien A', status:false, jobDate:'04/03/2020',receiptNumber:'KRW202003002' },
      {  id: 3, containerNumber:  'HLBU9213001', shipper:'Tahti', line:'Hapag', departure:'08/03/2020', arrival:'24/04/2020', 
      vessel:'AS Carelia', status:true, jobDate:'05/03/2020',receiptNumber:'KRW202003003' },
      {  id: 4, containerNumber:  'BMOU9250147', shipper:'Prudent', line:'Hapag', departure:'25/03/2020', arrival:'05/05/2020', 
      vessel:'Genoa Express', status:false, jobDate:'06/03/2020',receiptNumber:'KRW202003004' },
      {  id: 5, containerNumber:  'SEGU9389546', shipper:'Heritage', line:'Hapag', departure:'25/03/2020', arrival:'18/04/2020', 
      vessel:'Frisia Oslo', status:true, jobDate:'07/03/2020',receiptNumber:'KRW202003005' }, 
    ];

    return { jobs };

   }
}
