import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consignment } from 'src/app/model/consignment';
import { ConsignmentService } from 'src/app/services/consignment.service';

@Component({
  selector: 'app-consignment-detail',
  templateUrl: './consignment-detail.component.html',
  styleUrls: ['./consignment-detail.component.css'],
  providers:[ConsignmentService]
})
export class ConsignmentDetailComponent implements OnInit {
  consignment: Consignment;
  container:any;
  constructor(private consignmentService: ConsignmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //const container: string = this.route.snapshot.params.container;
    this.route.paramMap.subscribe(params => {
      this.container = params.get('container');
      this.consignmentService.getConsignment(this.container).subscribe(consign=>{
        this.consignment = consign['results'];
        console.log(this.consignment.line);
        });
    });
    

  }

}
