import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { IOption } from '/src/models/interfaces';

interface ISelectProps {
  options: IOption[];
  icon: React.ReactNode;
  className?: string;
  onChange?: (value: string) => void;
  selectPlaceholder?: string;
}

export const Select = ({
  options,
  icon,
  className,
  onChange,
  selectPlaceholder
}: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

  const handleSelect = (option: IOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={classNames(styles.select, className)}>
      <div className={styles.select__container} onClick={toggleDropdown}>
        <span>{selectedOption?.label || selectPlaceholder}</span>
        <div
          className={classNames(
            styles.select__container_icon,
            isOpen && styles.select__container_icon_rotate
          )}
        >
          {icon}
        </div>
      </div>

      {isOpen && (
        <ul className={styles.select__dropdown}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.select__dropdown_item}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
