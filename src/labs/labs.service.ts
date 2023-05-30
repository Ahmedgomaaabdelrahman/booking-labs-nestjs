/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lab } from "./lab.entity";
import { LabDto } from "./dtos/lab.dto";
import { dayInterface } from "./day.interface";
import { NotFoundException } from "@nestjs/common";

export class LabsService {
    constructor(@InjectRepository(Lab) private labsRepo: Repository<Lab>){
        
    }

    create(name: string, capacity: string, address: string,  image: string,available_times: dayInterface[]){
        const savedLab = this.labsRepo.create({ name, capacity,address, image, available_times});
        return this.labsRepo.save(savedLab);
    }
   
    async findAll() {
        const allLabs = await this.labsRepo.find({where:{reserved: false}});
        return allLabs;
    }
    async setReservedColumnToFalse(): Promise<void> {
        await this.labsRepo.update({}, { reserved: false });
    }

    find(id: number) {
        return this.labsRepo.find({ where: {id}})
     
    }

    async update(id: number, body: Partial<Lab>){
        const lab = await this.find(id);
        return this.labsRepo.save({id, ...body})
    }


    async delete(id: number){
        const lab = await this.find(id);
        return this.labsRepo.remove(lab);
    }

    async search(capacity: string) {
        const filteredLabs = await this.labsRepo.find({ where: {capacity,reserved: false}});
        return filteredLabs;
    }

    async reserve(id: number): Promise<Lab> {
        // this.setReservedColumnToFalse()
        const lab: Lab = await this.labsRepo.findOneOrFail({where:{id}});
      
        lab.reserved = true;
        return this.labsRepo.save(lab);
    }

}