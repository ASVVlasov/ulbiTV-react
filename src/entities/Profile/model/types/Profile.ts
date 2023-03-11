export interface IProfileSchema {
  profile?: IProfile;
  error?: string;
}

export interface IProfile {
  id: string;
  firstname: string;
  lastname: string;
  secondName: string;
  age: number;
  currency: string;
  country: string;
  city: string;
  nickname: string;
  avatar: string;
}
