import { IsArray, IsOptional, IsString } from "class-validator";
import { dayInterface } from "../day.interface";

export class SearchLabDto {
    @IsString()
    @IsOptional()
    capacity: string;
}