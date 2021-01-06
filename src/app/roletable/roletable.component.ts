import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/role';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-roletable',
  templateUrl: './roletable.component.html',
  styleUrls: ['./roletable.component.css']
})
export class RoletableComponent implements OnInit {

  roles:any=[];
  newrole=new Role();
  edit = new Role();
  deleteId: number;
  editId: number;
  roleForm:FormGroup;
  editroleForm:FormGroup;
  constructor(private fb: FormBuilder,private service:VisitorService,private router:Router) {
    let formControls = {
      addrole: new FormControl('',[
        Validators.required,    
      ])
    }
    let formControl = {
      editrole: new FormControl('',[
        Validators.required,
        
      ])
    }
    this.roleForm = this.fb.group(formControls);
    this.editroleForm = this.fb.group(formControl);
   }
   get addrole() { return this.roleForm.get('addrole') }
   get editrole() { return this.editroleForm.get('editrole') }

  ngOnInit(){
     this.service.getRole().subscribe(data=>{this.roles=data});
  }

  newRole(){
       this.service.newRole(this.newrole).subscribe(data=>{
        console.log(data);
        location.reload();
       })
  }
  openDelete( r:Role) {
    this.deleteId = r.roleId;
}
  deleteRole(){
    this.service.deleteRole(this.deleteId).subscribe(data=>{
      console.log(data);
      location.reload();
    })
  }
  openEdit(r:Role){
    this.editId = r.roleId;
  }
  editRole(){
    
       this.service.editRole(this.editId,this.edit).subscribe(data=>{
        console.log(data);
        location.reload();
      })
  }
}
