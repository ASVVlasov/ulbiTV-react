import { type FC } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';

export const LoginForm: FC = () => {
  const { t } = useTranslation();
  const mods: Record<string, boolean> = {};
  console.log(cls);
  return (
    <div className={classNames(cls.LoginForm, mods)}>
      <Input type="text">{t('Логин')}</Input>
      <Input type="password">{t('Пароль')}</Input>
      <Button className={cls.submitBtn}>{t('Войти')}</Button>
    </div>
  );
};
