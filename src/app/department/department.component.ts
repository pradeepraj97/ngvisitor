import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/Employee';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  id:number;
  details:any=[];
  username:string;
  approval='Approved';
  rejected='Rejected';
  constructor(private route:ActivatedRoute, private router:Router, private service:VisitorService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username");   
  }

  approve(visitorId:number ){
    console.log(visitorId)
    this.service.approveVisitor(visitorId,this.approval).subscribe(data=>{
      console.log(data);
    })
    location.reload();
  }
   reject(visitorId:number){
       this.service.rejectVisitor(visitorId,this.rejected).subscribe(data=>{
        console.log(data);
      })
       location.reload();
   }
}
