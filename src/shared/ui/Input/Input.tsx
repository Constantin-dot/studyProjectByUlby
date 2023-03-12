import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames, ModsType } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface IProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo((props: IProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    autoFocus,
    type = 'text',
    readonly,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [innerValue, setInnerValue] = useState('');

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setInnerValue(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const mods: ModsType = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          className={cls.input}
          readOnly={readonly}
          {...otherProps}
        />
        {
          (isFocused && (innerValue.length === 0) && (value?.length === 0))
        && <span className={cls.caret} />
        }
      </div>
    </div>
  );
});
