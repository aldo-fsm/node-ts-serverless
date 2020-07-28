import { ParsedQs } from "qs";

const isNumber = (val: any) => !isNaN(Number(val));
const isBool = (val: any) => val === 'false' || val === 'true';

export const parseQuery = (query: ParsedQs, fields: TypeParse): object => {
  return Object.keys(query).reduce((result, key) => {
    let val: any = query[key];
    if (fields.toNumber && fields.toNumber.includes(key) && isNumber(val)) {
      val = Number(val);
    } else if (fields.toBool && fields.toBool.includes(key) && isBool(val)) {
      val = Boolean(val);
    }
    return { ...result,  [key]: val };
  }, {});
}

interface TypeParse {
  toNumber?: string[];
  toBool?: string[];
}
