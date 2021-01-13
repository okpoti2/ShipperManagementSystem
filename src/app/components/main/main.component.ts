import { Component, OnInit,AfterViewInit , ViewChild, ViewEncapsulation} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
//import { JobService } from "../../services/job.service";
import { ConsignmentService } from "../../services/consignment.service";
import { Job } from "../../model/job";
import { Consignment } from 'src/app/model/consignment';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['created_at','container_number', 'shipper', 'line', 'departure', 'arrival', 'vessel', 'status', 'receipt_number'];
  //jobsData: Job[] = [];
  consignmentsData: Consignment[] = [];

  dataSource: MatTableDataSource<Consignment>; 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 /* constructor(private jobService: JobService){
  }*/

  constructor(private consignmentService: ConsignmentService){
  }

  ngOnInit(){
      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.consignmentService.getConsignments().subscribe((consignments: Consignment[])=>{
      console.log(consignments);
      this.consignmentsData = consignments['results'];
    this.dataSource = new MatTableDataSource<Consignment>(this.consignmentsData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      //console.log(jobs);
    
    //this.jobService.getJobs().subscribe((jobs: Job[]) => this.dataSource = new MatTableDataSource<Job>(jobs));
  });
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



