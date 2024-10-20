import { Document, ObjectId } from "mongoose";

export default interface IEmployee extends Document {
    name: string;
    email: string;
    password: string;
    profile: string;
    managerId: ObjectId;
    position: string;
    role: "employee" | "manager";
    otp?:string;
}