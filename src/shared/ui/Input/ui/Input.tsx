import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';
import { classNames } from 'shared/lib/classNames';
type THtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
interface IInputProps extends THtmlInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo<IInputProps>((props) => {
  const { value, onChange, type = 'text', children, ...otherProps } = props;
  const mods: Record<string, boolean> = {};
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.inputWrapper, mods)}>
      {children && <label className={classNames(cls.label)}>{children}</label>}
      <input className={classNames(cls.input)} value={value} onChange={onChangeHandler} type={type} {...otherProps} />
    </div>
  );
});
