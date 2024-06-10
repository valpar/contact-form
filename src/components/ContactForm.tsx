import * as Form from '@radix-ui/react-form';
import { useEffect, useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [countries, setCountries] = useState([]);
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
        className='modal__button group absolute right-[20px] sm:right-[70px] md:right-[102px] lg:right-[108px] xl:right-[172px] lg:top-[52px] '
      >
        <img src='/icons/icon--close.svg' alt='close' />
      </button>
      <div className='grid grid-cols-1 mt-[6%] tall:mt-[3%] tall-md:mt-[6%] tall:pb-[3%] pb-[6%] lg:[grid-template-columns:35%_65%] sm:px-10 md:px-16 lg:px-10 xl:px-20'>
        <aside>
          <div className='space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb-0'>
            <div>
              {' '}
              <p className='text-xl leading-7.5 md:font-reckless-neue md:text-4xl md:leading-12 md:tracking-tighter  '>
                Media enquiries:
              </p>
              <a
                href='#'
                className='underline-link text-lg relative inline-block cursor-pointer'
              >
                press@tuum.com
              </a>
            </div>
            <div>
              <p className='text-xl leading-7.5 md:font-reckless-neue md:text-4xl md:leading-12 md:tracking-tighter '>
                Career questions:
              </p>
              <a
                href='#'
                className='underline-link text-lg relative inline-block cursor-pointer'
              >
                careers@tuum.com
              </a>
            </div>
          </div>
        </aside>
        <div className='bg-white tall:py-6 tall-md:py-8 py-8 px-8 lg:px-10 xl:px-16 rounded-[40px]'>
          <div className='wrap'>
            <Form.Root>
              <div className='mb-8 flex justify-between items-center'>
                <h1 className='text-5xl leading-15'>Contact us</h1>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <Form.Field name='firstName' className='relative'>
                  <Form.Control asChild>
                    <input
                      name='firstName'
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('firstName')}
                      className='rounded-lg border w-full p-2.5 px-3.5 shadow-sm border-gray-300 focus:outline-focus-blue'
                      placeholder='First name'
                      required
                    />
                  </Form.Control>
                  {isActive.firstName && formValues.firstName === '' && (
                    <div className='absolute -top-1.5 left-3 bg-white px-1 text-red-500 text-xs'>
                      Please complete this required field.
                    </div>
                  )}
                </Form.Field>
                <Form.Field name='lastName' className='relative'>
                  <Form.Control asChild>
                    <input
                      name='lastName'
                      value={formValues.lastName}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('lastName')}
                      className='rounded-lg border w-full p-2.5 px-3.5 shadow-sm border-gray-300 focus:outline-focus-blue'
                      placeholder='Last name'
                      required
                    />
                  </Form.Control>
                  {isActive.lastName && formValues.lastName === '' && (
                    <div className='absolute -top-1.5 left-3 bg-white px-1 text-red-500 text-xs'>
                      Please complete this required field.
                    </div>
                  )}
                </Form.Field>
                <Form.Field name='email' className='relative'>
                  <Form.Control asChild>
                    <input
                      name='email'
                      value={formValues.email}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('email')}
                      className='rounded-lg border w-full p-2.5 px-3.5 shadow-sm border-gray-300 focus:outline-focus-blue'
                      placeholder='Email'
                      required
                    />
                  </Form.Control>
                  {isActive.email && formValues.email === '' && (
                    <div className='absolute -top-1.5 left-3 bg-white px-1 text-red-500 text-xs'>
                      Please complete this required field.
                    </div>
                  )}
                </Form.Field>
                <Form.Field name='jobTitle'>
                  <Form.Control asChild>
                    <input
                      className='rounded-lg border w-full p-2.5 px-3.5 shadow-sm border-gray-300 focus:outline-focus-blue '
                      placeholder='Job Title'
                    />
                  </Form.Control>
                </Form.Field>
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
                      {countries.map(({ name, unicodeFlag }) => (
                        <option key={name} value={name}>
                          {unicodeFlag} {name}
                        </option>
                      ))}
                    </select>
                  </Form.Control>
                </Form.Field>
                <Form.Field name='companyName' className='relative'>
                  <Form.Control asChild>
                    <input
                      name='companyName'
                      value={formValues.companyName}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('companyName')}
                      className='rounded-lg border w-full p-2.5 px-3.5 shadow-sm border-gray-300 focus:outline-focus-blue'
                      placeholder='Company name'
                      required
                    />
                  </Form.Control>
                  {isActive.companyName && formValues.companyName === '' && (
                    <div className='absolute -top-1.5 left-3 bg-white px-1 text-red-500 text-xs'>
                      Please complete this required field.
                    </div>
                  )}
                </Form.Field>
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
                  </div>
                </Form.Control>
              </Form.Field>
              <Form.Field name='newsletter'>
                <Form.Control asChild>
                  <div className='mt-1'>
                    <input type='checkbox' className='relative mt-4 mr-4' />I
                    would like to receive your newsletter.
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
