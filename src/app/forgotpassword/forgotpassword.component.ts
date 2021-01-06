import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/Employee';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
 
  registerForm: FormGroup
  log= new Employee();
  invalidLogin=false;
  errorMessage = 'Invalid Credentials';

  constructor(
    private fb: FormBuilder,
    private service:VisitorService,
    private router:Router,
    
    ) {

    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
      ]),
      repassword: new FormControl('',[
        Validators.required,
      ])
    }

    this.registerForm = this.fb.group(formControls)
  }

  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get repassword() { return this.registerForm.get('repassword') }

  ngOnInit()  {
  }
   newpassword(){
       this.service.newpassword(this.log).subscribe(data=>{this.invalidLogin=false;
      this.router.navigate(['login']);
      },()=>{
        this.invalidLogin=true;
      }
      
      )
   }

}
