import { Area } from "./area";
import { Department } from "./department";
import { Role } from "./role";


export class Employee {
    id:number;
    username:string;
    password:string;
    emailId:string;
    area?:Area = new Area(); 
    department?:Department= new Department();  
    role?:Role = new Role();
    phoneNumber:string;
    constructor(){
    }
};