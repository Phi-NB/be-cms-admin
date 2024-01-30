import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DB_COLLECTION } from '../../constants/database';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type ConfigDocument = HydratedDocument<Config>;
export type ConfigDocumentVirtual = ConfigDocument & VirtualTypes;

type VirtualTypes = {
  key: string;
  value: string | number;
};

@Schema({ collection: DB_COLLECTION.CONFIG, versionKey: false })
export class Config {
  @Prop({ type: String, required: true })
  key: string;

  @Prop({ type: mongoose.Schema.Types.Mixed, required: true })
  value: string | number;
}

export const ConfigSchema = SchemaFactory.createForClass(Config);
