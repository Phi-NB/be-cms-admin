import { get, isArray, isEmpty, isUndefined } from 'lodash';
import { Types } from 'mongoose';

export const arrayToStringArray = (arr: any[]) => {
  return arr.map((item) => String(item).toLowerCase());
};

export const removeDuplicate = (arr: any[]) => {
  return [...new Set(arr)];
};

export const toArray = (data: any) => {
  if (!isArray(data) && (!isUndefined(data) || !isEmpty(data))) {
    return [data];
  }
  if (isArray(data)) {
    return data;
  }
  return [];
};

export const toObjectId = (data: string | Types.ObjectId) => {
  return new Types.ObjectId(data);
};

export const keyToValue = (key: string, obj: { [key: string]: string }) => {
  const value = get(obj, key, undefined);
  return value || key;
};

export const convertVersionFileName = (filename: string, maxLen: number = 30) => {
  const extensionRegex = /(\.[^./]+)+$/;
  const matches = filename.match(extensionRegex);

  const extension = matches ? matches[0] : '';

  const namePartMaxLength = maxLen - extension.length;

  const namePart = filename.substring(0, filename.length - extension.length);
  const shortenedNamePart = namePart.length > namePartMaxLength ? namePart.substring(0, namePartMaxLength) : namePart;

  return shortenedNamePart + extension;
};
