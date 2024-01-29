export interface IPaginationParamReq {
  offset?: number;
  limit?: number;
}

export interface ISearch {
  [key: string]: any;
}

export interface ISort {
  key: string;
  direction: number;
}

export interface IFilter {
  key: string;
  option: string[];
}

export interface IPaginationBodyReq {
  search?: ISearch;
  sort?: ISort[];
  filter?: IFilter[];
}

export interface IGetById {
  id: string;
}

export type IPagination = IPaginationParamReq & IPaginationBodyReq;
