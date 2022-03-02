import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FeatureDocument = Feature & Document;

@Schema()
export class Feature {
  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop()
  icon: string;
}

export const FeatureSchema = SchemaFactory.createForClass(Feature);
