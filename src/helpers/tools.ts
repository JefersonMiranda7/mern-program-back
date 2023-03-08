import { StatusCodes } from 'http-status-codes';
import { IFail } from '../interfaces/fail.interface';
import { ISuccess } from '../interfaces/success.interface';

export const genRandomNumber = (nDigits: number): string => {
  let number: string = nDigits > 0 ? (Math.floor(Math.pow(10, nDigits - 1) + Math.random() * Math.pow(10, nDigits - 1))).toString() : '0';

  return number;
}

export const randomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
}

export const randomFloat = (max: number, nDecimals: number): number => {
  return parseFloat((Math.random() * max).toFixed(nDecimals));
}

export const fail = (error: string | unknown): IFail => {
  return { statusCode: StatusCodes.BAD_REQUEST, error };
}

export const success = <T>(body: T): ISuccess<T> => {
  return { statusCode: StatusCodes.OK, body };
}