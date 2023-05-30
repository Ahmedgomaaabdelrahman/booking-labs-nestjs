import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LabDto } from "./dtos/lab.dto";
import { dayInterface } from "./day.interface";

@Entity()
export class Lab {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address:string;

    @Column()
    capacity: string;

    @Column()
    image: string;
    
    @Column('simple-json', {nullable: true})
    available_times: dayInterface[]

    @Column({nullable: true})
    reserved:boolean;

}