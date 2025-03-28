import classNames from 'classnames';
import styles from './styles.module.scss';

export type ButtonSize = 'xl' | 'md' | 'sm';
export type ButtonVariant = 'full' | 'sides' | 'text';
export type ButtonColor = 'primary' | 'secondary' | 'purple';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * Additional class names to apply to the button
   */
  className?: string;
  /**
   * Defines the button color
   */
  color?: ButtonColor;
  /**
   * If `true`, the button will be disabled
   */
  disabled?: boolean;
  /**
   * Component id
   * */
  id?: string;
  /**
   * The size of the button
   */
  size?: ButtonSize;
  /**
   * Defines the button variant
   */
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  className,
  color = 'primary',
  disabled = false,
  id,
  onClick,
  size = 'md',
  type = 'button',
  variant = 'full',
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[`button__${variant}`],
        styles[`button__${color}`],
        styles[`button__${size}`],
        className
      )}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
