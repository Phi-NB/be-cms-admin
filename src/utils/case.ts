import { camelCase, cloneDeep, isArray, isObject, isPlainObject, kebabCase, map, mapKeys, mapValues } from 'lodash';
import { Types } from 'mongoose';

export const normalizeVietnamese = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
};

export const convertNameRouter = (name: string) => {
  return kebabCase(normalizeVietnamese(name));
};

export const camelize = (obj: any): any => {
  let objectCheck = obj;
  if (Types.ObjectId.isValid(objectCheck)) {
    objectCheck = obj.toString();
  }
  if (!isObject(objectCheck)) {
    return objectCheck;
  }
  let object = cloneDeep(objectCheck);
  if (isArray(object)) {
    return map(object, camelize);
  } else {
    object = mapKeys(object, (value: any, key: any) => {
      return camelCase(key);
    });
    return mapValues(object, (value: any) => {
      if (isPlainObject(value)) {
        return camelize(value);
      } else if (isArray(value)) {
        return map(value, camelize);
      } else {
        return value;
      }
    });
  }
};
