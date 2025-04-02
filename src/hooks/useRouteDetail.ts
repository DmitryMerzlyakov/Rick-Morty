import { links } from '/src/app/config';
import { useNavigate } from 'react-router-dom';

export const useRouteDetail = () => {
  const navigate = useNavigate();

  const handleClickDetail = (id: number, resource: string) => {
    navigate(`/${resource}/${links.detail}/${id}`, {
      state: {
        id: id,
        type: `${resource === 'character' ? 'hero' : resource}`,
      },
      replace: true,
    });
  };

  return { handleClickDetail };
};
