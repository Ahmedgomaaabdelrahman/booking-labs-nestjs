import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Lab } from "./lab.entity";
import { LabDto } from "./dtos/lab.dto";
import { dayInterface } from "./day.interface";

export class LabsService {
    constructor(@InjectRepository(Lab) private labsRepo: Repository<Lab>){}

    create(name: string, capacity: string, address: string,  images: string[],available_times: dayInterface[]){
        const savedLab = this.labsRepo.create({ name, capacity,address, images, available_times});
        return this.labsRepo.save(savedLab);
    }

    async findAll() {
        const allLabs = await this.labsRepo.find();
        return allLabs;
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

    async search(body: Partial<Lab>) {
        const filteredLabs = await this.labsRepo.find();
        return filteredLabs;
    }

    reserve(id: number, reservationTime: dayInterface){
        const lab = this.find(id)
        return lab;
    }

}