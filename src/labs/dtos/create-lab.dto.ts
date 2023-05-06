import { IsArray, IsOptional, IsString } from "class-validator";
import { dayInterface } from "../day.interface";

export class CreateLabDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsString()
    capacity: string;

    @IsArray()
    @IsOptional()
    images: string[]

    @IsArray()
    available_times: dayInterface[]
}