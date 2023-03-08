export interface IAuthByUsernameSchema {
  email: string;
  password: string;
  error?: string;
  isLoading?: boolean;
}
