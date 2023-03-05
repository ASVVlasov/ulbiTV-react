import { type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';

import { useAsyncStore } from 'shared/hooks';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';
import { ETextVariant, Text } from 'shared/ui/Text/Text';

import { getLoginState } from '../../model/selectors/selectors';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

const LoginForm: FC = () => {
  const { t } = useTranslation();
  const appDispatch = useAppDispatch();
  useAsyncStore('login', loginReducer);
  const { username, password, error, isLoading } = useAppSelector(getLoginState);

  const mods: Record<string, boolean> = {};

  const onChangeUsername = useCallback(
    (value: string) => {
      appDispatch(loginActions.setUsername(value));
    },
    [appDispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      appDispatch(loginActions.setPassword(value));
    },
    [appDispatch],
  );

  const onSubmit = useCallback(() => {
    void appDispatch(loginByUsername({ username, password }));
  }, [appDispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, mods)}>
      <Text title={t<string>('Форма авторизации')} />
      {error && <Text text={error} variant={ETextVariant.DANGER} />}
      <Input type="text" value={username} onChange={onChangeUsername}>
        {t('Логин')}
      </Input>
      <Input type="password" value={password} onChange={onChangePassword}>
        {t('Пароль')}
      </Input>
      <Button className={cls.submitBtn} onClick={onSubmit} disabled={isLoading}>
        {t('Войти')}
      </Button>
    </div>
  );
};

export default LoginForm;
