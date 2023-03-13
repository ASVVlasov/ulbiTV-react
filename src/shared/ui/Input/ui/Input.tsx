import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react';

import { classNames } from 'shared/lib/classNames';

import cls from './Input.module.scss';

type THtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends THtmlInputProps {
  label?: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

// Function Test(props: IInputProps<string>): JSX.Element;
// function Test(props: IInputProps<number>): JSX.Element;
// function Test<T extends string | number>(props: IInputProps<T>): JSX.Element {
//   return <></>
// };
export const Input = memo<IInputProps>((props) => {
  const { label, value, onChange, type = 'text', ...otherProps } = props;
  const mods: Record<string, boolean> = {};
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.inputWrapper, mods)}>
      {label && <label className={classNames(cls.label)}>{label}</label>}
      <input
        className={classNames(cls.input)}
        value={value}
        onChange={onChangeHandler}
        type={type}
        {...otherProps}
        autoComplete="off"
      />
    </div>
  );
});
