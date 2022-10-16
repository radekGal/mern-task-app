import React, { FC } from 'react';

type FormBlockProps = {
  type: string,
  name: string,
  value: string,
  className: string,
  children?: React.ReactNode
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormBlock: FC<FormBlockProps> = ({ type, name, value, className, handleChange, children }) => {

  const bigName = name.charAt(0).toUpperCase() + name.slice(1);

  return(
    <div className="mb-4 relative">
      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor={name}>
        {bigName}
      </label>
      <input
        className={className}
        placeholder={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {children}
    </div>
  );
}