import { Button, Input } from '@/components/ui';
import styles from './styles.module.scss';
import { IUser } from '@/models/interfaces';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

export const SignInForm = () => {
  const { register, handleSubmit, control } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = (data) => console.log(data);

  return (
    <form className={styles.signin} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.signin__fields}>
        <Controller
          render={({ field: { onChange, value } }) => (
            <Input
              label="Введите Ваше имя"
              inputPlaceholder="Имя"
              onChange={onChange}
              value={value.replace(/[^0-9]/g, '')}
            />
          )}
          rules={{
            pattern: /^[0-9]+$/,
            minLength: 3,
            maxLength: 20,
            required: true,
          }}
          control={control}
          name={'name'}
        />
        <Input
          label="Введите Ваш никнейм"
          inputPlaceholder="Никнейм"
          {...register('nickName', { required: true, maxLength: 20 })}
        />
      </div>
      <Button>Войти</Button>
    </form>
  );
};
