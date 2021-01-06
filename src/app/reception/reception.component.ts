import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Visitor } from 'src/Visitor';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

  areadata :any = [];
  deptdata :any = []; 
  Id:number;
  visitors:any=[];
  newvisit=new Visitor();
 private id : number;
 outTime:Time;
  username: string;
  constructor(private service:VisitorService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username")
    this.service.getVisit().subscribe(data=>{this.visitors=data});
    this.service.getArea().subscribe(data=>{
      this.areadata = data;
});
 this.service.getDept().subscribe(data=>{
     this.deptdata = data;
 });
  }

  newVisit(){
      this.service.newVisit(this.newvisit).subscribe(data=>  location.reload());
  }

  openEdit( v:Visitor) {
    this.id = v.visitorId;
}
  openDelete( v:Visitor) {
      this.id = v.visitorId;
  }
  deleteVisit(){
    this.service.deleteVisit(this.id).subscribe(data=>{ location.reload()})
 } 

 editOutTime(){
   this.service.editOutTime(this.outTime,this.id).subscribe(data=>{ location.reload()})
 }
}
