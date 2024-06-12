import React from 'react';
import * as Form from '@radix-ui/react-form';

interface FormInputFieldProps {
  name: string;
  value?: string;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (name: string) => void;
  isActive?: boolean;
  placeholder: string;
}

const FormInputField: React.FC<FormInputFieldProps> = ({
  name,
  value,
  handleInputChange,
  handleBlur,
  isActive,
  placeholder,
}) => (
  <Form.Field name={name} className='relative'>
    <Form.Control asChild>
      <input
        name={name}
        value={value}
        onChange={handleInputChange}
        onBlur={() => handleBlur && handleBlur(name)}
        className='rounded-lg border w-full p-2.5 px-3.5 shadow-sm border-gray-300 focus:outline-focus-blue'
        placeholder={placeholder}
        required
      />
    </Form.Control>
    {isActive && value === '' && (
      <div className='absolute -top-1.5 left-3 bg-white px-1 text-red-500 text-xs'>
        Please complete this required field.
      </div>
    )}
  </Form.Field>
);

export default FormInputField;
