import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AbonnementDocument= Abonnement & Document;
@Schema()
export class Abonnement {
  @Prop({required:  true})
  title: string;

  @Prop({required: true})
  duree: string;

  @Prop()
  prix: number;

  @Prop()
  description:string;
}

export const AbonnementSchema = SchemaFactory.createForClass(Abonnement);