import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export type TLabelPosition = 'bottom' | 'left' | 'right' | 'top';
export type TIconPosition = 'end' | 'start';
export type TInputType = 'password' | 'text';

export interface IInputProps {
  /**
   * autoFocus prop
   * */
  autoFocus?: boolean;
  /**
   * className prop
   * */
  className?: string;
  /**
   * If 'true' the input will be disabled
   * */
  disabled?: boolean;
  /**
   * The input's hint
   * */
  hint?: string;
  /**
   * Label's icon
   * */
  iconLabel?: React.ReactNode;
  /**
   * Placeholder's icon
   * */
  iconPlaceholder?: React.ReactNode;
  /**
   * The icon position (default position 'end')
   * */
  iconPosition?: TIconPosition;
  /**
   * Component id
   * */
  id?: string;
  /**
   * The input's placeholder
   * */
  inputPlaceholder?: string;
  /**
   * If 'true' the input border and the input hint will change color
   * */
  isError?: boolean;
  /**
   * If 'true' the input hint will change color
   * */
  isSuccess?: boolean;
  /**
   * The label for the input
   * */
  label?: React.ReactNode | string;
  /**
   * The label position (default position 'top')
   * */
  labelPosition?: TLabelPosition;
  /**
   * The input handler
   * */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * The input type. 'password' | 'text'
   * */
  type?: TInputType;
  /**
   * The input value
   * */
  value?: string;
}

export const Input = ({ 
    autoFocus = false,
    isError = false, 
    isSuccess = false, 
    iconPlaceholder, 
    iconPosition = 'end', 
    type = 'text', 
    value,
    labelPosition = 'top', 
    onChange, 
    label, 
    hint, 
    inputPlaceholder, 
    className, 
    iconLabel, 
    id, 
    disabled,
  }: IInputProps) =>{

  return (
    <div
      className={classNames(
        styles.wrapper,
        isError && styles.wrapperError,
        styles[`labelPosition__${labelPosition}`],
        styles[`iconPosition__${iconPosition}`],
        !label && styles.labelHidden,
        !hint && styles.hintHidden,
        className
      )}
    >
      {label && (
        <label className={styles.label} htmlFor={id}>
          <h3 className={styles.label_text}>{label}</h3>
          <span className={styles.label_icon}>{iconLabel}</span>
        </label>
      )}
      <div className={styles.input_wrapper}>
        <input
          autoFocus={autoFocus}
          className={styles.input}
          disabled={disabled}
          id={id}
          onChange={onChange}
          placeholder={inputPlaceholder}
          type={type}
          value={value}
        />
        <span className={styles.input_icon}>{iconPlaceholder}</span> 
        {hint && (
          <span
            className={classNames(
              styles.input_hint,
              isSuccess && styles.input_hint__success
            )}
          >
            {hint}
          </span>
        )}
      </div>
    </div>
  );
};
