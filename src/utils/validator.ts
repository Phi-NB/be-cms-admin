import { TransformFnParams } from 'class-transformer';
import { arrayToStringArray, removeDuplicate } from './convert';
import { checkObjectId } from './check';
import { isArray, merge, pick } from 'lodash';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import mongoose from 'mongoose';
import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import dayjs from 'dayjs';

type TParseFormDataJsonOptions = {
  except?: string[];
};

export const transformToObjectId = (params: TransformFnParams) => {
  const { value } = params;
  if (isArray(value)) {
    const stringArray = removeDuplicate(arrayToStringArray(value));
    return stringArray.map((item) => checkObjectId(item));
  }
  return checkObjectId(value);
};

export const transformToBoolean = (params: TransformFnParams) => {
  const { value } = params;
  const formatValue = String(value).toLowerCase();
  if (['true', 'false'].includes(formatValue)) {
    return formatValue === 'true';
  }
  return value;
};

@ValidatorConstraint({ name: 'object-id', async: false })
export class IsObjectId implements ValidatorConstraintInterface {
  validate(text: any) {
    return mongoose.Types.ObjectId.isValid(text);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must be object id`;
  }
}

@ValidatorConstraint({ name: 'string-or-number', async: false })
export class IsNumberOrString implements ValidatorConstraintInterface {
  validate(text: any) {
    return typeof text === 'number' || typeof text === 'string';
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must be number or string`;
  }
}

@ValidatorConstraint({ name: 'is-before-date', async: false })
export class IsBeforeDate implements ValidatorConstraintInterface {
  validate(propertyValue: any, args: ValidationArguments) {
    const date = (args.object as any)[args.constraints[0]];
    return dayjs(propertyValue).isBefore(date);
  }

  defaultMessage(args: ValidationArguments) {
    return `"${args.property}" must be before "${args.constraints[0]}"`;
  }
}

@ValidatorConstraint({ name: 'is-after-date', async: false })
export class IsAfterDate implements ValidatorConstraintInterface {
  validate(propertyValue: any, args: ValidationArguments) {
    const date = (args.object as any)[args.constraints[0]];
    return dayjs(propertyValue).isAfter(date);
  }

  defaultMessage(args: ValidationArguments) {
    return `"${args.property}" must be after "${args.constraints[0]}"`;
  }
}

export class ParseFormDataJsonPipe implements PipeTransform {
  constructor(private options?: TParseFormDataJsonOptions) {}

  transform(value: any, _metadata: ArgumentMetadata) {
    const { except } = this.options;
    const serializedValue = value;
    const originProperties = {};
    if (except?.length) {
      merge(originProperties, pick(serializedValue, ...except));
    }
    const deserializedValue = JSON.parse(JSON.stringify(value));
    return { ...deserializedValue, ...originProperties };
  }
}
