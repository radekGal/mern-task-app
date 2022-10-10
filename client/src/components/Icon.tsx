import { FC } from 'react';
import * as OutlineIcons from '@heroicons/react/24/outline';

type IconName = keyof typeof OutlineIcons

type IconProps = {
  icon: IconName,
  className?: string,
  handleClick?: () => void
}

export const Icon: FC<IconProps> = ({ icon, className, handleClick }) => {

  const TheIcon = OutlineIcons[icon]; 

  return <TheIcon className={className} onClick={handleClick} />
}