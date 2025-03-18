import { Button, Input } from '@/components/ui';
import styles from './styles.module.scss';
import { IUser } from '@/models/interfaces';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';
import { AuthContext } from '@/models/constants';
import { useNavigate } from 'react-router-dom';
import { links } from '@/app/config';

export const SignInForm = () => {
  const navigate = useNavigate();
  const auth = useAuth({ context: AuthContext });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = (data) => {
    auth.signIn(data, () => navigate(`${links.main}`));
  };

  return (
    <form className={styles.signin} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.signin__fields}>
        <Input
          label="Введите Ваше имя"
          inputPlaceholder="Имя"
          {...register('name', {
            required: true,
            maxLength: {
              value: 20,
              message: 'Максимальная длинна 20 символов',
            },
            minLength: {
              value: 3,
              message: 'Минимальная длинна 3 символа',
            },
            pattern: {
              value: /^[a-zA-ZА-Яа-яЁё]+$/,
              message: 'Имя не может содержать цифры и другие спец. символы',
            },
          })}
          hint={`${errors.name ? errors.name?.message : ''}`}
        />
        <Input
          label="Введите Ваш никнейм"
          inputPlaceholder="Никнейм"
          {...register('nickName', {
            required: true,
            minLength: {
              value: 3,
              message: 'Минимальная длинна 3 символа',
            },
            maxLength: {
              value: 20,
              message: 'Максимальная длинна 20 символов',
            },
          })}
          hint={`${errors.nickName ? errors.nickName?.message : ''}`}
        />
      </div>
      <Button type="submit">Войти</Button>
    </form>
  );
};
