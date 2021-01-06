import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Router } from '@angular/router';
import { Employee } from 'src/Employee';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log = new Employee();
   admin :any = new Employee;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  constructor(private service:VisitorService, private router:Router) {  }
 
  ngOnInit(){
  }

  getCredentials(){
    this.service.loginUser(this.log).subscribe(data=>{this.invalidLogin = false;
     this.loginSuccess = true;
     this.successMessage = 'Login Successful.';
     this.admin = data;
     sessionStorage.setItem("username",this.admin[0].username)
     console.log(sessionStorage.getItem("username"))
     if(this.admin[0].deptName == 'Admin'){
    this.router.navigate(['admin']);
     }else if(this.admin[0].deptName == 'Technical'){
      this.router.navigate(['department']);
    }else if(this.admin[0].deptName == 'Reception'){
     this.router.navigate(['reception']);
     }
   }, () => {
     this.invalidLogin = true;
     this.loginSuccess = false;
   });      
}
 
    changepassword(){
      this.router.navigate(['forgotpassword']);
    }
    changepage(){
      this.router.navigate(['department']);
    }
}
