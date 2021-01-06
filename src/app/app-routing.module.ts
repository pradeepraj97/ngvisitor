import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AreatableComponent } from './areatable/areatable.component';
import { DepartmentComponent } from './department/department.component';
import { DeptTableComponent } from './dept-table/dept-table.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { ReceptionComponent } from './reception/reception.component';
import { RoletableComponent } from './roletable/roletable.component';
import { UsertableComponent } from './usertable/usertable.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'usertable',component:UsertableComponent},
  {path:'areatable',component:AreatableComponent},
  {path:'roletable',component:RoletableComponent},
  {path:'dept-table',component:DeptTableComponent},
  {path:'reception',component:ReceptionComponent},
  {path:'department',component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
