import { IHero } from '@/models/interfaces';
import styles from './styles.module.scss';
import { Circle } from '@/assets/icons';
import classNames from 'classnames';

interface IDetailHeroProps {
  data: IHero;
}

export const DetailHero = ({ data }: IDetailHeroProps) => {

  return (
    <div className={styles.detail}>
      <img src={data.image} />
      <div className={styles.detail__info}>
        <p>Name: <strong>{data.name}</strong></p>
        <p>Gender: <strong>{data.gender}</strong></p>
        <div className={styles.detail__info_status}>
          <Circle className={classNames(styles[`circle__${data.status}`])}/>
          <p>{data.species}, {data.status}</p>
        </div>
      </div>
    </div>
  );
};
