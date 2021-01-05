import { Component, OnInit,AfterViewInit , ViewChild, ViewEncapsulation} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { JobService } from "../../services/job.service";
import { Job } from "../../model/job";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'jobDate','containerNumber', 'shipper', 'line', 'departure', 'arrival', 'vessel', 'status', 'receiptNumber'];
  jobsData: Job[] = [];

  dataSource: MatTableDataSource<Job>; 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private jobService: JobService){
  }

  ngOnInit(){
      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.jobService.getJobs().subscribe((jobs: Job[])=>{
      this.jobsData = jobs;
    this.dataSource = new MatTableDataSource<Job>(this.jobsData);
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



