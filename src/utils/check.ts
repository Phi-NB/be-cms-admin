import mongoose, { Model } from 'mongoose';
import { arrayToStringArray, removeDuplicate, toArray } from './convert';
import { compact, isEmpty, isUndefined } from 'lodash';
import { newError } from './error';
import { HttpStatus } from '@nestjs/common';

export const isObjectId = (id: string | number | mongoose.Types.ObjectId) => {
  return mongoose.Types.ObjectId.isValid(id);
};

export const checkObjectId = (id: string | number | mongoose.Types.ObjectId) => {
  if (isObjectId(id)) {
    return new mongoose.Types.ObjectId(id);
  }

  return id;
};

export const queryExistsObjectId = (arr: any[], additionalQuery: object) => {
  return {
    _id: { $in: arr.map((item) => checkObjectId(item)) },
    ...additionalQuery,
  };
};

export const queryByAdditionalQuery = (additionalQuery: object) => {
  return {
    ...additionalQuery,
  };
};

export const isEmptyObject = (data: any) => {
  return typeof data === 'object' && JSON.stringify(data) === '{}';
};

export const dataCheck = (data: any, convertData: any, defaultData?: any) => {
  if (isUndefined(data) || isEmptyObject(data)) {
    return defaultData || {};
  }
  return convertData;
};

export const checkExistsObjectId = async (
  model: Model<any, any, any, any, any>,
  arrayId: any,
  errorMessage: string,
  fullDoc = false,
  ignoreNotExists = false,
  additionalQuery = {},
  additionalOptions: mongoose.QueryOptions<any> = {},
): Promise<any[]> => {
  let query = {};

  const arr = removeDuplicate(arrayToStringArray(compact(toArray(arrayId))));
  const isUsingArrayId = !isEmpty(arr);
  const isUsingQuery = isEmpty(arr) && !isEmptyObject(additionalQuery);

  if (!isUsingArrayId && !isUsingQuery) {
    throw newError(HttpStatus.NOT_FOUND, errorMessage);
  }

  if (isUsingArrayId) {
    query = queryExistsObjectId(arr, additionalQuery);
  }

  if (isUsingQuery) {
    query = queryByAdditionalQuery(additionalQuery);
  }

  if (fullDoc) {
    const exists = await model.find(query, null, additionalOptions).exec();
    if (ignoreNotExists) {
      return exists;
    }
    if (isUsingArrayId && arr.length !== exists.length) {
      throw newError(HttpStatus.NOT_FOUND, errorMessage);
    }
    if (isUsingQuery && exists.length === 0) {
      throw newError(HttpStatus.NOT_FOUND, errorMessage);
    }
    return exists;
  }

  const count = await model.countDocuments(query);
  if (ignoreNotExists) {
    return [count];
  }

  if (isUsingArrayId && arr.length !== count) {
    throw newError(HttpStatus.NOT_FOUND, errorMessage);
  }
  if (isUsingQuery && count === 0) {
    throw newError(HttpStatus.NOT_FOUND, errorMessage);
  }

  return [];
};

export const isNumber = (value: any) => {
  return !isNaN(Number(value));
};
