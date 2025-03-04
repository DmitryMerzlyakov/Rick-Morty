import { IEpisode, ILocation } from "@/models/interfaces";

interface IDetailListProps {
  data: ILocation | IEpisode
}

export const DetailList = ({ data }: IDetailListProps) => {
  console.log(data);
  
  return (
    <div className=""></div>
  );
};
