import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/Department';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-dept-table',
  templateUrl: './dept-table.component.html',
  styleUrls: ['./dept-table.component.css']
})
export class DeptTableComponent implements OnInit {

  depts:any=[];
  newdept=new Department();
  edit = new Department();
  deleteId: number;
  editId: number;
  deptForm:FormGroup;
  editdeptForm:FormGroup;
  constructor(private fb: FormBuilder, private service:VisitorService,private router:Router) {
    let formControls = {
      addDept: new FormControl('',[
        Validators.required,    
      ])
    }
    let formControl = {
      editdept: new FormControl('',[
        Validators.required,
        
      ])
    }
    this.deptForm = this.fb.group(formControls);
    this.editdeptForm = this.fb.group(formControl);
   }
   get addDept() { return this.deptForm.get('addDept') }
   get editdept() { return this.editdeptForm.get('editdept') }


  ngOnInit(){
     this.service.getDept().subscribe(data=>{this.depts=data});
  }

  newDept(){
       this.service.newDept(this.newdept).subscribe(data=>{
        console.log(data);
        location.reload();
       })
  }
    openDelete( d:Department) {
    this.deleteId = d.deptId;
}
  deleteDept(){
    this.service.deleteDept(this.deleteId).subscribe(data=>{
      console.log(data);
      location.reload();
    })
  }
  openEdit(d:Department){
    this.editId = d.deptId;
  }
  editDept(){
    
    this.service.editDept(this.editId,this.edit).subscribe(data=>{
     console.log(data);
     location.reload();
   })
}
}
