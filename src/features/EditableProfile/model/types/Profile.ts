import { type IProfile } from 'entities/Profile';

export interface IProfileSchema {
  data?: IProfile;
  error?: string;
  isLoading: boolean;
}
