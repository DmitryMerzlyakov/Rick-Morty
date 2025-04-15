import classNames from 'classnames';

import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { links } from '/src/app/config/';
import { Button, Select } from '..';
import { HeroImage } from '/src/assets/icons';
import { useAuth } from '/src/hooks/useAuth';
import { AuthContext, optionHeader } from '/src/models/constants';
import { useWindowSize } from 'usehooks-ts';

interface IHeaderProps {
  /**
   * Additional class names to apply to the button
   */
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => {

  const navigate = useNavigate();
  const { width } = useWindowSize();
  const auth = useAuth({ context: AuthContext });

  const handleClickNavigate = (value: string) => {
    switch (value) {
      case 'episodes':
        return links.episodes
      case 'locations':
        return links.locations
      case 'heroes':
        return links.heroes
      default:
        return links.main
    }
  }

  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles.header__content}>
        <HeroImage size='xl' className={styles.header__content_logo} />
        {auth.user?.name && (
          <Button
            variant='text'
            onClick={() => auth.signOut(() => navigate(links.main))}
          >
            {auth.user?.nickName}
          </Button>
        )}
      </div>
      {
        width >= 768 ?
          <span>
            {
              optionHeader.map((option, index) =>
                <Button
                  key={index}
                  size='md'
                  variant='text'
                  color='purple'
                  onClick={() => navigate(option.link as string)}
                >
                  {option.label}
                </Button>
              )
            }
          </span>
          :
          <Select
            options={optionHeader}
            className={styles.header__select}
            selectPlaceholder={`${width > 375 ? 'Choose page' : 'Page'}`}
            onChange={(value) => navigate(handleClickNavigate(value as string))}
          />
      }
    </header>
  );
};
