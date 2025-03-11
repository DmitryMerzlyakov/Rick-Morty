import { EpisodeKeyName, LocationKeyName, PagesName } from '@/models/enums';
import { TData } from '@/models/interfaces';
import { useLocation } from 'react-router-dom';

interface IDetailListProps {
  data: TData;
}

export const DetailList = ({ data }: IDetailListProps) => {
  const location = useLocation();
  const keyName = location.state === PagesName.location ? LocationKeyName : EpisodeKeyName;

  return (
    <div>
      {Object.entries(data).map(([key, value]) => {
        const displayKey = keyName[key as keyof typeof keyName] || key
        return (
          (value !== 'unknown' && typeof value !== 'number') &&
          <p key={key}>
            {displayKey}: <strong>{value}</strong>
          </p>
        )
      })}
    </div>
  );
};
