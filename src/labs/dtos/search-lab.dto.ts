import { IsArray, IsOptional, IsString } from "class-validator";
import { dayInterface } from "../day.interface";

export class SearchLabDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    capacity: string;

    @IsArray()
    @IsOptional()
    available_times: dayInterface[]
}