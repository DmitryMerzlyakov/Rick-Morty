import styles from './styles.module.css';
import { ArrowImage } from '@/assets/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui';


export const DetailInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);
  
  return (
    <div className={styles.detail}>
      <div className={styles.detail__info}>
        <Button onClick={() => navigate(-1)}>
          <ArrowImage />
          GO BACK
        </Button>
        <div className={styles.detail__info_person}>
          <img src="" alt="" />
          <h3>Rick</h3>
        </div>
      </div>      
    </div>
  );
};
