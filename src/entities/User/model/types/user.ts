export interface IUser {
  id: string;
  username: string;
}

export interface IUserSchema {
  user?: IUser;
  isLoading?: boolean;
  error?: string;
}
