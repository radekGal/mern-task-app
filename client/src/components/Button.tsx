import { FC } from 'react';

type ButtonProps = {
  type: 'button' | 'submit',
  text: string,
  handleClick?: () => void,
}

export const Button: FC<ButtonProps> = ({ type, text, handleClick }) => {
  return <button type={type} onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {text}
  </button>
}