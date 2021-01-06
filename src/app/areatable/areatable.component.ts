import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Area } from 'src/Area';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-areatable',
  templateUrl: './areatable.component.html',
  styleUrls: ['./areatable.component.css']
})
export class AreatableComponent implements OnInit {

  areas:any=[];
  newarea=new Area();
  edit = new Area();
 deleteId : number;
 editId : number;
 areaForm:FormGroup;
  editareaForm:FormGroup;
  constructor(private fb: FormBuilder, private service:VisitorService,private router:Router) {
    let formControls = {
      addarea: new FormControl('',[
        Validators.required,    
      ])
    }
    let formControl = {
      editarea: new FormControl('',[
        Validators.required,
        
      ])
    }
    this.areaForm = this.fb.group(formControls);
    this.editareaForm = this.fb.group(formControl);
   }
   get addarea() { return this.areaForm.get('addarea') }
   get editarea() { return this.editareaForm.get('editarea') }

  ngOnInit(){
     this.service.getArea().subscribe(data=>{this.areas=data});
  }

  newArea(){
       this.service.newArea(this.newarea).subscribe(data=>{
        console.log(data);
        location.reload();
       })
  }
  openDelete( a:Area) {
    this.deleteId = a.areaId;
}
  deleteArea(){
    this.service.deleteArea(this.deleteId).subscribe(data=>{
      console.log(data);
      location.reload();
    })
   
  }
  openEdit( a:Area){
    this.editId = a.areaId;
  }
  editArea(){
       this.service.editArea(this.editId,this.edit).subscribe(data=>{
        console.log(data);
        location.reload();
      })
  }
}
