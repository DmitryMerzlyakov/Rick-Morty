import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { IOption } from '/src/models/interfaces';
import { DeleteImage, SelectArrowImage } from '/src/assets/icons';
import { Button } from '../button';

interface ISelectProps {
  /**
   * The select's options values
   * */
  options: IOption[];
  /**
   * Additional class names
   */
  className?: string;
  /**
   * The select's handler
   * */
  onChange?: (value: string) => void;
  /**
   * The select's additional clear value function
   * */
  onClear?: () => void;
  /**
   * The select's placeholder
   * */
  selectPlaceholder?: string;
  /**
   * The select's value
   * */
  value?: string;
}

export const Select = ({
  options,
  className,
  onChange,
  selectPlaceholder,
  value = '',
}: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<IOption | null>(null);

  const selectedOption =
    value !== ''
      ? options.find((option) => option.value === value) || null
      : internalValue;

  useEffect(() => {
    if (value !== '') {
      setInternalValue(
        options.find((option) => option.value === value) || null
      );
    }
  }, [options, value]);

  const handleSelect = (option: IOption) => {
    if (value === '') {
      setInternalValue(option);
    }
    if (onChange) {
      onChange(option.value);
    }
    setIsOpen(false);
  };

  const handleDeleteOption = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (value === '') {
      setInternalValue(null);
    }
    if (onChange) {
      onChange('');
    }
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={classNames(styles.select, className)}>
      <div className={styles.select__container} onClick={toggleDropdown}>
        <span className={styles.select__text}>
          {selectedOption?.label ? selectedOption?.label : selectPlaceholder}
        </span>
        {selectedOption?.label ? (
          <Button variant='text' onClick={(e) => handleDeleteOption(e)}>
            <DeleteImage className={styles.select__icon} />
          </Button>
        ) : (
          <SelectArrowImage
            className={styles.select__icon}
            direction={`${isOpen ? 'up' : 'down'}`}
          />
        )}
      </div>
      {isOpen && (
        <ul className={styles.select__dropdown}>
          {options.map((option) => (
            <Button
              variant='text'
              key={option.value}
              className={styles.select__dropdown_item}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </Button>
          ))}
        </ul>
      )}
    </div>
  );
};
