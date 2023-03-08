import { genRandomAddress, genRandomPersonName } from './genSuppliers';
import { ITenant } from '../interfaces/tenant.interface';
import { N_TENANTS } from '../data/tenant';
import { Road } from '../enums/road.enum';
import { randomInt } from './tools';

export const genTenants = (): ITenant[] => {
  let tenants: ITenant[] = [];
  for (let i: number = 0; i < N_TENANTS; i++) {
    let [firstName, secondName, lastName] = genRandomPersonName();
    let road: Road;
    if (randomInt(2)) road = Road.street;
    else road = Road.avenue;

    const tenant: ITenant = ({
      tenantName: firstName + ' ' + lastName,
      address: genRandomAddress(road),
    })
    tenants.push(tenant);
  }
  return tenants;
}