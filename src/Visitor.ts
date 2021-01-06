import { Time } from "@angular/common";

export class Visitor{
    visitorId:number;
    visitorName:string;
    date:Date;
    employeeName:string;
    department:string;
    inTime:Time;
    outTime:Time;
    purpose:string;
    authorizedBy:string;
    status:string;
    area:string;
    constructor(){}
};