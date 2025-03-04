import { Button } from '@/components/ui';
import styles from './styles.module.scss';
import classNames from 'classnames';

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
  /**
   * Element click function
   */
  onClick: (id: number) => void;
}

export const List = ({ data, onClick, className }: IListProps) => {
  return (
    <ul className={classNames(styles.locations, className)}>
      {data.map((item) =>
        <li>
          <Button variant="text" key={item.id} onClick={() => onClick(item.id as number)}>
            {item.name}
          </Button>
        </li>
      )}
    </ul>
  );
};
