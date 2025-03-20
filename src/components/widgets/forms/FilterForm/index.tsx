import { SearchImage, SelectArrowImage } from '/src/assets/icons';
import { Input, Select } from '/src/components/ui';
import { useSearchQueryParams } from '/src/hooks/useSearch';
import { IGeneralQuery, IOption } from '/src/models/interfaces';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';

export const FilterForm = () => {
  const { createSearch } = useSearchQueryParams();
  const { register, watch, getValues } = useForm<IGeneralQuery>();

  useEffect(() => {
    createSearch({
      name: getValues('name') as string,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('name')]);

  const options: IOption[] = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'genderless', label: 'Genderless' },
    { value: 'unknown', label: 'Unknown' },
  ];

  return (
    <div className="">
      <Input
        inputPlaceholder="Filter by name..."
        iconPlaceholder={<SearchImage />}
        {...register('name')}
      />
      <Select
        options={options} 
        selectPlaceholder="Gender"
        icon={<SelectArrowImage className={styles.select__icon}/>} 
      />
    </div>
  );
};
