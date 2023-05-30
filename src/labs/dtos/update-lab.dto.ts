/* eslint-disable prettier/prettier */
import { IsArray, IsBoolean, IsOptional, IsString } from "class-validator";
import { dayInterface } from "../day.interface";

export class UpdateLabDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    address: string;

    @IsString()
    @IsOptional()
    capacity: string;

    @IsString()
    @IsOptional()
    image: string

    @IsArray()
    @IsOptional()
    available_times: dayInterface[]

    @IsBoolean()
    @IsOptional()
    reserved:boolean
}