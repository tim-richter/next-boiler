import React, { ChangeEvent } from 'react';
import { styledSelect, styledSelectLabel } from '@components/Select/Select.css';

type Props = {
  id: string;
  label: string;
  placeholder?: string;
  options: {
    value: string;
    text: string;
  }[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ id, label, options, onChange, placeholder }: Props) => {
  if (options.length === 0) return null;

  return (
    <>
      <label htmlFor={id} className={styledSelectLabel()}>
        {label}
      </label>
      <select name={id} id={id} className={styledSelect()} onChange={onChange}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
