import { IsArray, IsBoolean, IsString } from "class-validator";
import { dayInterface } from "../day.interface";

export class LabDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsString()
    capacity: string;

    @IsString()
    image: String

    @IsArray()
    avaiable_times: dayInterface[]

    @IsBoolean()
    reserved:boolean
}
 