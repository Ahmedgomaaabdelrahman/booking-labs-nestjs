import { IsArray, IsString } from "class-validator";
import { dayInterface } from "../day.interface";

export class LabDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsString()
    capacity: string;

    @IsArray()
    images: String[]

    @IsArray()
    avaiable_times: dayInterface[]
}
 