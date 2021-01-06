import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from 'src/Area';
import { Department } from 'src/Department';
import { Employee } from 'src/Employee';
import { Role } from 'src/role';
import { Visitor } from 'src/Visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
   
  roleId:number;
  
 
  constructor(private http: HttpClient) { }

  public loginUser(log: Employee) {
    return this.http.post(`http://localhost:8080/employee/login`, log);
  }

  public newpassword(log: Employee) {
    return this.http.put(`http://localhost:8080/employee/updatepassword`, log);
  }

  public getEmployee(){
    return this.http.get(`http://localhost:8080/employee/all`);
  }
   public addUser(newuser:Employee){
    // console.log(newuser);
     return this.http.post(`http://localhost:8080/employee/newuser`,newuser);
   }
   public deleteUser(deleteId:number) {
    return this.http.delete(`http://localhost:8080/employee/delete/${deleteId}`);
  }
  public getRole(){
    return this.http.get(`http://localhost:8080/role/all`);
  }

   public newRole(newrole: Role) {
    return this.http.post(`http://localhost:8080/role/add`, newrole);
  }

  public editRole(roleId: number, edit: any) {
    return this.http.put(`http://localhost:8080/role/update/${roleId}`,edit);
  }

  public deleteRole(roleId:number) {
    return this.http.delete(`http://localhost:8080/role/delete/${roleId}`);
  }
  public getDept(){
    return this.http.get(`http://localhost:8080/department/all`);
  }

   public newDept(newdept: Department) {
    return this.http.post(`http://localhost:8080/department/add`, newdept);
  }

  public editDept(deptId: number, edit: any) {
    return this.http.put(`http://localhost:8080/department/update/${deptId}`,edit);
  }

  public deleteDept(deptId:number) {
    return this.http.delete(`http://localhost:8080/department/delete/${deptId}`);
  }
  public getArea(){
    return this.http.get(`http://localhost:8080/area/all`);
  }

   public newArea(newarea: Area) {
    return this.http.post(`http://localhost:8080/area/add`, newarea);
  }

  public editArea(areaId: number, edit: any) {
    return this.http.put(`http://localhost:8080/area/update/${areaId}`,edit);
  }

  public deleteArea(areaId:number) {
    return this.http.delete(`http://localhost:8080/area/delete/${areaId}`);
  }
  public getVisit(){
    return this.http.get(`http://localhost:8080/visitor/all`);
  }
  public newVisit(newvisit: Visitor) {
    return this.http.post(`http://localhost:8080/visitor/newvisitor`, newvisit);
  }
  public deleteVisit(id:number) {
    return this.http.delete(`http://localhost:8080/visitor/delete/${id}`);
  }
  public editOutTime(outTime:Time,id:number){
    return this.http.put(`http://localhost:8080/visitor/outTime/${id}/${outTime}`,[])
  }
  public approveVisitor(visitorId: number, approval: string) {
    return this.http.put(`http://localhost:8080/visitor/status/${visitorId}/${approval}`,[])
  }
  public rejectVisitor(visitorId: number, rejected: string) {
    return this.http.put(`http://localhost:8080/visitor/status/${visitorId}/${rejected}`,[])
  }
  public getDataByDate(from: string , to: string) {
    return this.http.get(`http://localhost:8080/visitor/data/${from}/${to}`)
  }
  public getDataByDept(from: string, to: string, dept: string) {
    return this.http.get(`http://localhost:8080/visitor/data/department/${from}/${to}/${dept}`)
  }
  public updateEmployeeById(editId: number, edituser:Employee) {
    return this.http.post(`http://localhost:8080/employee/updateuser/${editId}`,edituser)
  }
  public getDataByArea(from: string, to: string, areaStatus: string) {
    return this.http.get(`http://localhost:8080/visitor/data/area/${from}/${to}/${areaStatus}`)
  }
}
