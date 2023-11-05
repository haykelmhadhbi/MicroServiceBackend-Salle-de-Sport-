import { Module } from '@nestjs/common';
import { AbonnementController } from './abonnements.controller';
import { AbonnementsService } from './abonnements.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Abonnement, AbonnementSchema } from 'src/models/abonnement.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Abonnement.name, schema: AbonnementSchema }])],
  controllers: [AbonnementController],
  providers: [AbonnementsService]
})
export class UsersModule {}
