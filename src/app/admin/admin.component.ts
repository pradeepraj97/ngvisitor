import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  areadata :any = [];
  deptdata :any = []; 
  username:string;
  area:string;
  dept:string;
  from: string;
  to: string;
  id:number;
  datedata :any=[];
  
  constructor(private router:Router,private service:VisitorService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username");
      this.service.getArea().subscribe(data=>{
        this.areadata = data;
  });
   this.service.getDept().subscribe(data=>{
       this.deptdata = data;
   });
   
  }
logout(){
    this.router.navigate(['login']);
}

public getDataByDate(){
  this.service.getDataByDate(this.from,this.to).subscribe(data=>{
    this.datedata = data;
    console.log(this.datedata);
    // location.reload();
  })
}
public getDataByDept(deptName:string){
 
  console.log(deptName);
  this.service.getDataByDept(this.from,this.to, deptName).subscribe(data=>{
    this.datedata = data;
    
  })
}
public getDataByArea(areaStatus:string){
 
  console.log(areaStatus);
  this.service.getDataByArea(this.from,this.to, areaStatus).subscribe(data=>{
    this.datedata = data;
    
  })
}
}
