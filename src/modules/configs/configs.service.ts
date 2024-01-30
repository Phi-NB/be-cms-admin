import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DB_COLLECTION } from '../../constants/database';
import { Model } from 'mongoose';
import { ConfigDocument } from '../../shared/configs/config.schema';
import { checkPaging, commonPaging } from '../../utils/pagination';
import { commonSort } from '../../utils/pagination/sort';
import { pipeLineList } from '../../shared/configs/pipe-line';
import { errorResponse, successResponse } from '../../utils/response';
import { MESSAGE_CODE } from '../../constants/message';

@Injectable()
export class ConfigsService {
  @InjectModel(DB_COLLECTION.CONFIG)
  private readonly modelConfig: Model<ConfigDocument>;
  // async getListConfig(params: any, body: any): Promise<any> {
  //   try {
  //     let dbQuery = {};
  //     // const searchQuery = searchDeck(body);
  //     // dbQuery = { ...searchQuery, uid: new mongoose.Types.ObjectId(body.uId) };
  //     const pagingData = await commonPaging(params, this.modelConfig, dbQuery);
  //     const checkPagingData = checkPaging(pagingData);
  //     if (checkPagingData) return checkPagingData;
  //     const sortQuery = commonSort(body);
  //     const doc = await this.modelConfig.aggregate(pipeLineList({ dbQuery, ...pagingData, sortQuery })).exec();

  //     return successResponse({ ...pagingData, data: doc });
  //   } catch (error) {
  //     return errorResponse({ error, message: 'Error' });
  //   }
  // }
}
