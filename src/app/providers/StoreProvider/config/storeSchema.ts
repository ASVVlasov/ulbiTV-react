import { type ILoginSchema } from 'features/AuthByUsername';

import { type ICounterSchema } from 'entities/Counter';
import { type ITokenSchema } from 'entities/Token';
import { type IUserSchema } from 'entities/User';

export interface IStoreSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  login: ILoginSchema;
  token: ITokenSchema;
}
