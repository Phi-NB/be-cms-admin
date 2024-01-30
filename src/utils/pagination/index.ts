import { MESSAGE_CODE } from '../../constants/message';
import { IPaginationParamReq } from '../../interfaces/pagination';
import { Model } from 'mongoose';

export const commonPaging = async (
  { offset, limit }: IPaginationParamReq,
  collection: Model<any>,
  query: any,
): Promise<any> => {
  const currentPage = Number(offset);
  const perPage = Number(limit);
  const skip = (currentPage - 1) * perPage;
  const count = await collection.countDocuments(query);
  const pageCount = Math.ceil(count / perPage);
  return { currentPage, perPage, skip, count, pageCount };
};

export const checkPaging = ({ currentPage, perPage, pageCount, count }: any): any | undefined => {
  if (count === 0 || currentPage < 1 || (count > 0 && pageCount < currentPage)) {
    return {
      message: MESSAGE_CODE.NOT_FOUND_DATA,
      data: {
        currentPage,
        perPage,
        pageCount,
        count,
        data: [],
      },
    };
  }
  return undefined;
};
