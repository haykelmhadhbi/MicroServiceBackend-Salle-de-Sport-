import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbonnementDto } from 'src/dto/Abonnement.dto';
import { Abonnement } from 'src/models/abonnement.model';

@Injectable()
export class AbonnementsService {
    constructor(@InjectModel(Abonnement.name) private AbonnementModel: Model<Abonnement>) {}
    Add(body: AbonnementDto){
        return this.AbonnementModel.create(body);
    }
    FindAll(){
        return this.AbonnementModel.find();
    }
    FindOne(id: string){
        return this.AbonnementModel.findOne({_id:id});
    }
    Update(id:string, body: AbonnementDto){
        return this.AbonnementModel.findOneAndUpdate(
            {_id:id},
            {$set: body},
            {new: true});
    }
    Delete(id: string){
        return this.AbonnementModel.findOneAndDelete({_id:id});
    }
    Search(key: string){
        const keyword= key? {
            $or: [
                {title:{$regex: key, $options: 'i'}},
                {description:{$regex: key, $options: 'i'}},
            ]
        }: {}
        return this.AbonnementModel.find(keyword);
    }
}

