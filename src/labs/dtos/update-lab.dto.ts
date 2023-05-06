import { IsArray, IsOptional, IsString } from "class-validator";
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

    @IsArray()
    @IsOptional()
    images: string[]

    @IsArray()
    @IsOptional()
    available_times: dayInterface[]
}