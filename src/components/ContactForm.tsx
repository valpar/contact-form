import * as Form from '@radix-ui/react-form';
import { useEffect, useState } from 'react';
import FormInputField from './FormInputField';
import InfoBlock from './InfoBlock';
import CountrySelect from './CountrySelect';
import './ContactForm.css';

export default function ContactForm() {
  interface Country {
    name: string;
    unicodeFlag: string;
  }

  const [countries, setCountries] = useState<Country[]>([]);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
  });

  const [isActive, setIsActive] = useState({
    firstName: false,
    lastName: false,
    email: false,
    companyName: false,
    countryName: false,
  });

  const handleBlur = (field: string) => {
    setIsActive({ ...isActive, [field]: true });
  };

  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/flag/unicode')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data);
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='container-tuum-padded-x relative'>
      <button
        type='button'
        className='modal__button group absolute top-[4px] right-[24px] sm:right-[74px] md:right-[106px] lg:right-[112px] xl:right-[176px] lg:top-[56px] '
      >
        <img
          src='/icons/icon--close.svg'
          alt='close'
          className='scale-125 h-8 w-8'
        />
      </button>
      <div className='grid grid-cols-1 mt-[6%] tall:mt-[3%] tall-md:mt-[6%] tall:pb-[3%] pb-[6%] lg:[grid-template-columns:35%_65%] sm:px-10 md:px-16 lg:px-10 xl:px-20'>
        <aside>
          <div className='space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb-0'>
            <InfoBlock text='Media enquiries:' link='press@tuum.com' />
            <InfoBlock text='Career questions:' link='careers@tuum.com' />
          </div>
        </aside>
        <div className='bg-white tall:py-6 tall-md:py-8 py-8 px-8 lg:px-10 xl:px-16 rounded-[40px]'>
          <div className='wrap'>
            <Form.Root>
              <div className='mb-8 flex justify-between items-center'>
                <h1 className='text-5xl leading-15'>Contact us</h1>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <FormInputField
                  name='firstName'
                  value={formValues.firstName}
                  handleInputChange={handleInputChange}
                  handleBlur={handleBlur}
                  isActive={isActive.firstName}
                  placeholder='First name'
                />
                <FormInputField
                  name='lastName'
                  value={formValues.lastName}
                  handleInputChange={handleInputChange}
                  handleBlur={handleBlur}
                  isActive={isActive.lastName}
                  placeholder='Last name'
                />
                <FormInputField
                  name='email'
                  value={formValues.email}
                  handleInputChange={handleInputChange}
                  handleBlur={handleBlur}
                  isActive={isActive.email}
                  placeholder='Email'
                />
                <FormInputField name='jobTitle' placeholder='Job Title' />
                <CountrySelect countries={countries} />
                <FormInputField
                  name='companyName'
                  value={formValues.companyName}
                  handleInputChange={handleInputChange}
                  handleBlur={handleBlur}
                  isActive={isActive.companyName}
                  placeholder='Company name'
                />
              </div>
              <Form.Field name='message'>
                <Form.Control asChild>
                  <textarea
                    className='rounded-lg border w-full p-2.5 px-3.5 mt-4 shadow-sm border-gray-300 focus:outline-focus-blue resize-none h-36 mt-'
                    placeholder='What would you like to talk about?'
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field name='privacyPolicy'>
                <Form.Control asChild>
                  <div className='mt-1'>
                    <label>
                      <input
                        type='checkbox'
                        className='relative mt-4 mr-4'
                        required
                      />
                      By submitting this form I accept{' '}
                      <a
                        target='_blank'
                        rel='noopener'
                        href='#'
                        className='text-link-blue underline'
                      >
                        privacy policy
                      </a>{' '}
                      and{' '}
                      <a
                        target='_blank'
                        rel='noopener'
                        href='#'
                        className='text-link-blue underline'
                      >
                        cookie policy
                      </a>
                      . *
                    </label>
                  </div>
                </Form.Control>
              </Form.Field>
              <Form.Field name='newsletter'>
                <Form.Control asChild>
                  <div className='mt-1'>
                    <label>
                      <input type='checkbox' className='relative mt-4 mr-4' />I
                      would like to receive your newsletter.
                    </label>
                  </div>
                </Form.Control>
              </Form.Field>
              <Form.Submit asChild>
                <button className='py-2.5 px-4.5 text-base bg-[rgb(167,208,216)] hover:bg-[#D0D5DD] rounded-xl mt-4'>
                  Submit
                </button>
              </Form.Submit>
            </Form.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
