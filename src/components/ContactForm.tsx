import * as Form from '@radix-ui/react-form';
import { useEffect, useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/flag/unicode')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setCountries(data.data);
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <div className='container-tuum-padded-x relative'>
      <button
        type='button'
        className='modal__button group absolute z-50 focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-0 focus-visible:outline-brand-black/50 right-[20px] sm:right-[70px] md:right-[102px] lg:right-[108px] xl:right-[172px] lg:top-[52px] bg-contain !bg-center'
      >
        <img src='/src/assets/icon--close.svg' alt='close' />
      </button>
      <div className='grid sm:grid-cols-2 md:grid-cols-1 mt-[6%] tall:mt-[3%] tall-md:mt-[6%] tall:pb-[3%] pb-[6%] lg:[grid-template-columns:35%_65%] sm:px-10 md:px-16 lg:px-10 xl:px-20'>
        <aside>
          <div className='"space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb-0"'>
            <div>
              {' '}
              <p className='text-xl md:font-reckless-neue md:text-4xl '>
                Media enquiries:
              </p>
              <a
                href='#'
                className='underline-link text-lg after:bottom-0.5 after:w-full after:bg-brand-black hover:after:w-0 hover:after:bg-transparent focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-black/50'
              >
                press@tuum.com
              </a>
            </div>
          </div>
          <div className='space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb-0'>
            <div>
              <p className='text-xl md:font-reckless-neue md:text-4xl'>
                Career questions:
              </p>
              <a
                href=''
                className='underline-link text-lg after:bottom-0.5 after:w-full after:bg-brand-black hover:after:w-0 hover:after:bg-transparent focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-black/50'
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
                <Form.Field name='firstName'>
                  <Form.Control asChild>
                    <input
                      className='rounded-lg border w-full p-2.5 px-3.5 shadow-sm border-gray-300'
                      placeholder='First name'
                      required
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field name='lastName'>
                  <Form.Control asChild>
                    <input
                      className='rounded-lg border w-full p-2.5 px-3.5 shadow-sm border-gray-300'
                      placeholder='Last name'
                      required
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field name='email'>
                  <Form.Control asChild>
                    <input
                      className='rounded-lg border w-full p-2.5 px-3.5 shadow-sm border-gray-300'
                      placeholder='Email'
                      type='email'
                      required
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field name='jobTitle'>
                  <Form.Control asChild>
                    <input
                      className='rounded-lg border w-full p-2.5 px-3.5 shadow-sm border-gray-300'
                      placeholder='Job Title'
                      required
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field name='option'>
                  <Form.Control asChild>
                    <select
                      className='rounded-lg border w-full p-2.5 px-3.5 shadow-sm border-gray-300'
                      required
                    >
                      <option value=''>Country</option>
                      {countries.map(({ name, unicodeFlag }) => (
                        <option key={name} value={name}>
                          {unicodeFlag} {name}
                        </option>
                      ))}
                    </select>
                  </Form.Control>
                </Form.Field>
                <Form.Field name='extra'>
                  <Form.Control asChild>
                    <input
                      className='rounded-lg border w-full p-2.5 px-3.5 shadow-sm border-gray-300'
                      placeholder='Company name'
                      required
                    />
                  </Form.Control>
                </Form.Field>
              </div>
              <Form.Field name='message'>
                <Form.Control asChild>
                  <textarea
                    className='rounded-lg border w-full p-2.5 px-3.5 mt-4 shadow-sm border-gray-300 resize-none h-36 mt-'
                    placeholder='What would you like to talk about?'
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field name='privacyPolicy'>
                <Form.Control asChild>
                  <label>
                    <input
                      type='checkbox'
                      className='relative mt-4 mr-4'
                      required
                    />
                    By submitting this form I accept{' '}
                    <a href='#'>privacy policy</a> and{' '}
                    <a href='#'>cookie policy</a> . *
                  </label>
                </Form.Control>
              </Form.Field>
              <Form.Field name='newsletter'>
                <Form.Control asChild>
                  <label>
                    <input type='checkbox' className='relative mt-4 mr-4' />I
                    would like to receive your newsletter.
                  </label>
                </Form.Control>
              </Form.Field>
              <Form.Submit asChild>
                <button className='py-2.5 px-4 bg-[rgb(167,208,216)] rounded-xl mt-4'>
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
