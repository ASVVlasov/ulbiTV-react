import { type ICounterSchema } from 'entities/Counter';
import { type IUserSchema } from 'entities/User';

export interface IStoreSchema {
  counter: ICounterSchema;
  user: IUserSchema;
}
