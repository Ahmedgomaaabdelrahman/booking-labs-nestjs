/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LabsService } from './labs.service';
import { CreateLabDto } from './dtos/create-lab.dto';
import { UpdateLabDto } from './dtos/update-lab.dto';
import { SearchLabDto } from './dtos/search-lab.dto';
import { dayInterface } from './day.interface';

@Controller('labs')
export class LabsController {
    constructor(private labService: LabsService) { }
    // eslint-disable-next-line prettier/prettier
    @Post('/create')
    createLab(@Body() body: CreateLabDto) {
        return this.labService.create(body.name, body.capacity, body.address, body.image, body.available_times)
    }

    @Get()
    getAllLabs() {
        return this.labService.findAll()
    }


    @Get('/:id')
    getLabById(@Param('id') labid: string) {
        return this.labService.find(parseInt(labid))
    }
    @Patch('/update/:id')
    updateLab(@Param('id') labid: string,@Body() body: UpdateLabDto) {
        return this.labService.update(parseInt(labid), body);
    }

    @Delete('/delete/:id')
    deleteLab(@Param('id') labid: string) {
        return this.labService.delete(parseInt(labid));
    }

    @Post('/search')
    searchAboutLab(@Body() body: SearchLabDto){ 
        return this.labService.search(body.capacity);
    }

    @Get('/reserve/:id')
    reserveLab(@Param('id') labid: string){
        return this.labService.reserve(parseInt(labid))
    }

}
