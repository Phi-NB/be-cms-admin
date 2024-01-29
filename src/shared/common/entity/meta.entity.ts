import { Exclude, Expose } from 'class-transformer';
import { IFilter, IMeta, ISort } from '../../../interfaces/paging.interface';

@Exclude()
export class MetaEntity implements Partial<IMeta> {
  @Expose()
  currentPage: number;

  @Expose()
  itemsPerPage: number;

  @Expose()
  totalItems: number;

  @Expose()
  totalPages: number;

  @Expose()
  sortBy: ISort;

  @Expose()
  filter: IFilter[];

  constructor(partial: Partial<MetaEntity>) {
    Object.assign(this, partial);
  }
}
