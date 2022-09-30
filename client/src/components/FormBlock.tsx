import React, { FC } from 'react';

type FormBlockProps = {
  type: string,
  name: string,
  value: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormBlock: FC<FormBlockProps> = ({ type, name, value, handleChange }) => {
  return(
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb2" htmlFor={name}>
        {name}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}