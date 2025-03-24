import { SearchImage } from '/src/assets/icons';
import { Input, Select } from '/src/components/ui';
import { useSearchQueryParams } from '/src/hooks/useSearch';
import { IGeneralQuery, IOption } from '/src/models/interfaces';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './styles.module.scss';

interface IFilterFormProps {
  name?: boolean;
  status?: boolean;
  species?: boolean;
  type?: boolean;
  gender?: boolean;
  dimension?: boolean;
  episode?: boolean;
}

export const FilterForm = ({ name, gender, status, species, type, dimension }: IFilterFormProps) => {
  const { createSearch } = useSearchQueryParams();
  const { register, watch, getValues, control } = useForm<IGeneralQuery>();

  useEffect(() => {
    createSearch({
      name: getValues('name') as string,
      gender: getValues('gender') as string,
      status: getValues('status') as string,
      species: getValues('species') as string,
      type: getValues('type') as string,
      dimension: getValues('dimension') as string,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch(['name', 'gender', 'status', 'species', 'type', 'dimension']).join('')]);

  const optionsGender: IOption[] = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'genderless', label: 'Genderless' },
    { value: 'unknown', label: 'Unknown' },
  ];

  const optionsStatus: IOption[] = [
    { value: 'alive', label: 'Alive' },
    { value: 'dead', label: 'Dead' },
    { value: 'unknown', label: 'Unknown' },
  ];

  const optionSpecies: IOption[] = [
    { value: 'Human', label: 'Human' },
    { value: 'Alien', label: 'Alien' },
    { value: 'Cronenberg', label: 'Cronenberg' },
    { value: 'Robot', label: 'Robot' }
  ]

  const optionTypes: IOption[] = [
    { value: 'Planet', label: 'Planet' },
    { value: 'Resort', label: 'Resort' },
    { value: 'Dream', label: 'Dream' },
    { value: 'TV', label: 'TV' },
    { value: 'Space station', label: 'Space station' },
    { value: 'unknown', label: 'Unknown' },
  ]

  const optionDimension: IOption[] = [
    { value: 'Dimension C-137', label: 'Dimension C-137' },
    { value: 'Post-Apocalyptic Dimension', label: 'Post-Apocalyptic Dimension' },
    { value: 'Replacement Dimension', label: 'Replacement Dimension' },
    { value: 'Cronenberg Dimension', label: 'Cronenberg Dimension' },
    { value: 'Fantasy Dimension', label: 'Fantasy Dimension' },
    { value: 'unknown', label: 'Unknown' },
  ]

  return (
    <div className={styles.form}>
      {name &&
        <Input
          inputPlaceholder="Filter by name..."
          iconPlaceholder={<SearchImage />}
          {...register('name')}
        />
      }
      <div className={styles.form__selects}>
        {gender &&
          <Controller
            render={({ field: { onChange } }) => (
              <Select
                onChange={onChange}
                options={optionsGender}
                selectPlaceholder="Gender"
              />
            )}
            control={control}
            name={'gender'}
          />
        }
        {status &&
          <Controller
            render={({ field: { onChange } }) => (
              <Select
                onChange={onChange}
                options={optionsStatus}
                selectPlaceholder="Status"
              />
            )}
            control={control}
            name={'status'}
          />
        }
        {species &&
          <Controller
            render={({ field: { onChange } }) => (
              <Select
                onChange={onChange}
                options={optionSpecies}
                selectPlaceholder="Species"
              />
            )}
            control={control}
            name={'species'}
          />
        }
        {type &&
          <Controller
            render={({ field: { onChange } }) => (
              <Select
                onChange={onChange}
                options={optionTypes}
                selectPlaceholder="Type"
              />
            )}
            control={control}
            name={'type'}
          />
        }
        {dimension &&
          <Controller
            render={({ field: { onChange } }) => (
              <Select
                onChange={onChange}
                options={optionDimension}
                selectPlaceholder="Dimension"
              />
            )}
            control={control}
            name={'dimension'}
          />
        }
      </div>
    </div>
  );
};
