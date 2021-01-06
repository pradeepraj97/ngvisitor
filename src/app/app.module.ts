import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AreatableComponent } from './areatable/areatable.component';
import { DeptTableComponent } from './dept-table/dept-table.component';
import { RoletableComponent } from './roletable/roletable.component';
import { UsertableComponent } from './usertable/usertable.component';
import { CommonModule } from '@angular/common';
import { ReceptionComponent } from './reception/reception.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ForgotpasswordComponent,
    AreatableComponent,
    DeptTableComponent,
    RoletableComponent,
    UsertableComponent,
    ReceptionComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
