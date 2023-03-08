import { N_SUPPLIERS, MALE_NAMES, FEMALE_NAMES, LAST_NAMES, STREET_NAMES, EMAIL_DOMAINS } from '../data/supplier';
import { Road } from '../enums/road.enum';
import { ISupplier } from '../interfaces/supplier.interface';
import { genRandomNumber, randomInt } from './tools';

export const genRandomGender = (): string => {
  return randomInt(2) === 0 ? 'F' : 'M';
}

export const genRandomMaleName = (): string => {
  return MALE_NAMES[randomInt(MALE_NAMES.length)];
}

export const genRandomFemaleName = (): string => {
  return FEMALE_NAMES[randomInt(FEMALE_NAMES.length)];
}

export const genRandomLastName = (): string => {
  return LAST_NAMES[randomInt(LAST_NAMES.length)];
}

export const genRandomPersonName = (): string[] => {
  let firstName: string, secondName: string, lastName: string;

  if (genRandomGender() === 'M') {
    firstName = genRandomMaleName();
    secondName = genRandomMaleName();
  }
  else {
    firstName = genRandomFemaleName();
    secondName = genRandomFemaleName();
  }
  lastName = genRandomLastName();

  return [firstName, secondName, lastName];
}

export const genRandomAddress = (road: string): string => {
  return STREET_NAMES[randomInt(STREET_NAMES.length)] + ', ' + Math.floor(100 + Math.random() * 100) + ', ' + road;
}

export const genEmail = (firstName: string, lastName: string): string => {
  return (firstName.substring(0,3) + lastName.substring(0,3)).toLowerCase() + Math.floor(Math.random() * 10) + '@' + EMAIL_DOMAINS[randomInt(EMAIL_DOMAINS.length)];
}

export const genSuppliers = () => {
  let suppliers: ISupplier[] = [];

  for (let i: number = 0; i < N_SUPPLIERS; i++) {
    let [firstName, secondName, lastName] = genRandomPersonName();

    let road: Road;
    if (randomInt(2)) road = Road.street;
    else road = Road.avenue;
    
    const supplier: ISupplier = ({
      supplierName: firstName + ' ' + secondName + ' ' + lastName,
      address: genRandomAddress(road),
      email: genEmail(firstName, lastName),
      phone: genRandomNumber(11)
    })
    suppliers.push(supplier);
  }
  return suppliers;
}