import { FC } from 'react';

type ButtonProps = {
  type: 'button' | 'submit',
  className?: string
  handleClick?: () => void,
  children?: React.ReactNode
}

export const Button: FC<ButtonProps> = ({ type, handleClick, className, children }) => {
  return <button type={type} onClick={handleClick} className={className}>
    { children }
  </button>
}