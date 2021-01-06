import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Area } from 'src/area';
import { Department } from 'src/department';
import { Employee } from 'src/Employee';
import { Role } from 'src/role';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  areadata :any = [];
  deptdata :any = []; 
  roledata :any = [];
  employees :any = [];
 newuser = new Employee();
  deleteId: number;
editId:number;
 edituser = new Employee();
  constructor(private service:VisitorService, private router:Router) {
    console.log(this.newuser);
    console.log(this.edituser);
   }

  ngOnInit() {
   
    this.service.getEmployee().subscribe((data)=>{
            this.employees = data;
            console.log(this.employees);       
    });
    this.service.getArea().subscribe(data=>{
          this.areadata = data;
    });
     this.service.getDept().subscribe(data=>{
         this.deptdata = data;
     });
     this.service.getRole().subscribe(data=>{
        this.roledata = data;
     })

  }

  addUser(){
    console.log(this.newuser);
    this.service.addUser(this.newuser).subscribe(data=>{ console.log(data)});
     location.reload();
  }

  openDelete( employeee:Employee) {
    this.deleteId = employeee.id;
}
deleteUser(){
  this.service.deleteUser(this.deleteId).subscribe(data=>{ location.reload()})
} 

getById(info:Employee){
this.editId = info.id
}
editUserById(){
  console.log(this.edituser);
  this.service.updateEmployeeById(this.editId,this.edituser).subscribe(data=>{ console.log(data)});
   location.reload();
}
}
