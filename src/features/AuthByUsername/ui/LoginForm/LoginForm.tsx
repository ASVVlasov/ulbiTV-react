import { type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { useAppDispatch } from 'app/providers/StoreProvider';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';
import { ETextVariant, Text } from 'shared/ui/Text/Text';

import { getLoginState } from '../../model/selectors/selectors';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

export const LoginForm: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const mods: Record<string, boolean> = {};

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onSubmit = useCallback(() => {
    void appDispatch(loginByUsername({ username, password }));
  }, [appDispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, mods)}>
      <Text title={t<string>('Форма авторизации')} />
      {error && <Text text={error} variant={ETextVariant.DANGER} />}
      <Input type="text" onChange={onChangeUsername}>
        {t('Логин')}
      </Input>
      <Input type="password" onChange={onChangePassword}>
        {t('Пароль')}
      </Input>
      <Button className={cls.submitBtn} onClick={onSubmit} disabled={isLoading}>
        {t('Войти')}
      </Button>
    </div>
  );
};
