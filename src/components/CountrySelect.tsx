import React from 'react';
import * as Form from '@radix-ui/react-form';

interface Country {
  name: string;
  unicodeFlag: string;
}

interface CountrySelectProps {
  countries: Country[];
}

const CountrySelect: React.FC<CountrySelectProps> = ({ countries }) => (
  <Form.Field name='option'>
    <Form.Control asChild>
      <select
        className='rounded-lg border w-full p-3 px-3.5 shadow-sm border-gray-300 focus:outline-focus-blue'
        required
        title='Country'
      >
        <option disabled selected value='Country'>
          Country
        </option>
        {countries
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name, unicodeFlag }) => (
            <option key={name} value={name}>
              {unicodeFlag} {name}
            </option>
          ))}
      </select>
    </Form.Control>
  </Form.Field>
);

export default CountrySelect;
