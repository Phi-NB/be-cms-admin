import { IObjectNumber, IObjectString } from './common.interface';

export interface IPaging {
  limit: number;
  offset: number;
}

export type ISort = IObjectString;

export interface IMeta {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  sortBy: ISort;
  filter: IFilter[];
}

export interface IHandlePagingQuery {
  limit: number;
  offset: number;
  metaFilter: IFilter[];
  dbFilter: IFilter;
  metaSort: IObjectString;
  dbSort: IObjectNumber;
  skip: number;
}

export type IFilter = { [key: string]: IObjectString };

export interface IGetTotalPaging {
  totalItems: number;
  totalPages: number;
}
