import { IsArray, IsBoolean, IsOptional, IsString } from "class-validator";
import { dayInterface } from "../day.interface";

export class CreateLabDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsString()
    capacity: string;

    @IsString()
    @IsOptional()
    image: string 

    @IsArray()
    available_times: dayInterface[]

    @IsBoolean()
    reserved:boolean
}