import { Component, OnInit,AfterViewInit , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { JobService } from "../../services/job.service";
import { Job } from "../../model/job";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['ID', 'JOBDATE','CONTAINER', 'SHIPPER', 'LINE', 'DEPARTURE', 'ARRIVAL', 'VESSEL', 'COMPLETE', 'RECEIPT'];
  jobs: Job[] = [];

  dataSource: MatTableDataSource<Job>; 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private jobService: JobService){
  }

  ngOnInit(){
      this.jobService.getJobs().subscribe((jobs: Job[])=>{
        this.jobs = jobs;
        //console.log(jobs);
        this.dataSource = new MatTableDataSource<Job>(this.jobs);
      });
      
      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}



