import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
  @Prop()
  name: string;

  @Prop()
  tipo: string;

  @Prop()
  estado: string;

  @Prop()
  peso: string;

  @Prop()
  idade: string;

  @Prop()
  url: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
