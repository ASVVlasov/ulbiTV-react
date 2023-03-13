import { type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';

import { useAsyncStore } from 'shared/hooks';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';
import { ETextVariant, Text } from 'shared/ui/Text/Text';

import { getAuthByUsernameState } from '../../model/selectors/selectors';
import { authByUserName } from '../../model/services/authByUsername/authByUsername';
import { authByUsernameActions, authByUsernameReducer } from '../../model/slice/AuthByUsernameSlice';

import cls from './LoginForm.module.scss';

export interface ILoginFormProps {
  onSuccess: () => void;
}

const LoginForm: FC<ILoginFormProps> = ({ onSuccess }) => {
  const { t } = useTranslation();
  const appDispatch = useAppDispatch();
  useAsyncStore('authByUserName', authByUsernameReducer);
  const { email, password, error, isLoading } = useAppSelector(getAuthByUsernameState);

  const mods: Record<string, boolean> = {};

  const onChangeUsername = useCallback(
    (value: string) => {
      appDispatch(authByUsernameActions.setUsername(value));
    },
    [appDispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      appDispatch(authByUsernameActions.setPassword(value));
    },
    [appDispatch],
  );

  const onSubmit = useCallback(async () => {
    const result = await appDispatch(authByUserName({ email, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [appDispatch, onSuccess, password, email]);

  return (
    <div className={classNames(cls.LoginForm, mods)}>
      <Text title={t<string>('Форма авторизации')} />
      {error && <Text text={error} variant={ETextVariant.DANGER} />}
      <Input type="text" label={t<string>('Логин')} value={email} onChange={onChangeUsername} />
      <Input type="password" label={t<string>('Пароль')} value={password} onChange={onChangePassword} />
      <Button className={cls.submitBtn} onClick={onSubmit} disabled={isLoading}>
        {t('Войти')}
      </Button>
    </div>
  );
};

export default LoginForm;
