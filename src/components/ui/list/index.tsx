import { Button } from '@/components/ui';
import styles from './styles.module.scss';

type TData = {
  [key: string]: string | number;
};

interface IListProps {
  /**
   * Additional class names to apply to the button
   */
  className?: string;
  /**
   * Data for the list
   */
  data: TData[];
}

export const List = ({ data }: IListProps) => {
  return (
    <ul className={styles.locations}>
      {data.map((item) => (
        <li>
          <Button variant="text" color="text" key={item.id}>
            {item.name}
          </Button>
        </li>
      ))}
    </ul>
  );
};
