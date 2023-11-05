import { Controller, Delete, Get, Post, Param, Put, Query, Body } from '@nestjs/common';
import { AbonnementsService } from './abonnements.service';
import { AbonnementDto } from 'src/dto/Abonnement.dto';

@Controller('Abonnements')
export class AbonnementController {
    constructor(private readonly service:AbonnementsService){};
    @Post()
    AddAbonnement(@Body() body:AbonnementDto){
        return this.service.Add(body);
    }
    @Get()
    FindAllAbonnements(){
        return this.service.FindAll();
    }
    @Get("/:id")
    FindOneAbonnement(@Param('id') id: string){
        return this.service.FindOne(id);
    }
    @Put("/:id")
    UpdateAbonnement(@Param('id') id: string, @Body() body: AbonnementDto){
        return this.service.Update(id, body);
    }
    @Delete("/:id")
    DeleteAbonnement(@Param('id') id: string){
        return this.service.Delete(id);
    }
    @Post("/search")
    SearchAbonnement(@Query('key') key){
        return this.service.Search(key);
    }
}
