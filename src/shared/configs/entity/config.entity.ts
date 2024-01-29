import { Exclude, Expose, Transform } from 'class-transformer';
import { Types } from 'mongoose';
import { ConfigDocumentVirtual } from '../config.schema';

@Exclude()
export class ConfigEntity implements Partial<ConfigDocumentVirtual> {
  @Expose()
  @Transform(({ value }) => value?.toString())
  id: Types.ObjectId;

  @Expose()
  userId: string;

  @Expose()
  role: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  constructor(partial: Partial<ConfigEntity>) {
    Object.assign(this, partial);
  }
}
