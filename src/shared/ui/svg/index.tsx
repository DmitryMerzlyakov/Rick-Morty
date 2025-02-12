import { SVGAttributes } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

type IconProps = SVGAttributes<SVGElement> & { size?: 's' | 'm' | 'l' | 'xl' };

const LogoIcon = ({ className, size = 'm' }: IconProps) => {
  return (
    <svg
      className={classNames(styles[size], className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      width="72"
      height="72"
      baseProfile="basic"
    >
      <rect width="48" height="50" rx="36" fill="#FB7D5B" />
      <path
        fill="var(--color-purple)"
        d="M41.969,21H27c-1.105,0-2,0.895-2,2v3c0,1.105,0.895,2,2,2h1l4-1l4.364,1
            c-1.752,5.403-6.945,9.269-12.987,8.985c-6.64-0.311-12.104-5.818-12.367-12.46C10.864,20.827,11.641,16.454,14,14
            c2.367-2.462,6.322-3,10-3c2.751,0,5.307,0.858,7.411,2.321c0.808,0.562,1.89,0.499,2.587-0.195l2.154-2.145
            c0.849-0.845,0.789-2.268-0.17-2.987C32.612,5.465,28.419,3.973,23.878,4C13.428,4.063,4.612,12.429,4.032,22.863
            C3.39,34.407,12.593,44,24,44c5.771,0,10.347-3.078,14-7c3.329-3.573,6-7.741,6-13c0-0.386-0.011-0.77-0.033-1.15
            C43.907,21.805,43.016,21,41.969,21z"
      />
      <path
        fill="var(--color-white)"
        d="M24,44c-0.553,0-1-0.447-1-1s0.447-1,1-1c9.925,0,18-8.075,18-18c0-0.553,0.447-1,1-1s1,0.447,1,1
            C44,35.028,35.028,44,24,44z"
      />
      <path
        fill="var(--color-white)"
        d="M36,28h-8c-0.553,0-1-0.447-1-1s0.447-1,1-1h8c0.553,0,1,0.447,1,1S36.553,28,36,28z"
      />
      <path
        fill="var(--color-white)"
        d="M10.011,25.563c-0.534,0-0.977-0.422-0.998-0.96c-0.163-4.118,1.319-8.021,4.176-10.993	C16.045,10.638,19.885,9,24,9c0.553,0,1,0.447,1,1s-0.447,1-1,1c-3.565,0-6.894,1.419-9.37,3.997	c-2.475,2.575-3.761,5.958-3.619,9.526c0.022,0.553-0.407,1.018-0.959,1.039C10.038,25.563,10.024,25.563,10.011,25.563z"
      />
    </svg>
  );
};

export { LogoIcon };
