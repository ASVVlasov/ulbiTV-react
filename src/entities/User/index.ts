import { userActions, userReducer } from './model/slice/userSlice';
import { type IUser, type IUserSchema } from './model/types/user';
import { User } from './ui/User';

export { getUserDataSelector } from './model/selectors/userSelectors';
export { currentUser } from './model/services/currentUser';
export { userActions, userReducer, User, type IUser, type IUserSchema };
