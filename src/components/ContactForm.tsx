import './ContactForm.css';

export default function ContactForm() {
  return (
    <div className='container-tuum-padded-x relative'>
      {' '}
      <div className='grid grid-cols-1 mt-[6%] tall:mt-[3%] tall-md:mt-[6%] tall:pb-[3%] pb-[6%] lg:[grid-template-columns:35%_65%] sm:px-10 md:px-16 lg:px-10 xl:px-20'>
        <aside>
          <div className='"space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb-0"'>
            <div>
              {' '}
              <p className='text-xl md:font-reckless-neue md:text-4xl'>
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
            <form action=''>
              <fieldset className='form-columns-0'>
                <div>
                  <h1>Contact us</h1>
                </div>
              </fieldset>
              <fieldset className='form-columns-2'>
                <div>
                  <label htmlFor=''>
                    <span>First name</span>
                  </label>
                  <div className='input'>
                    <input type='text'></input>
                  </div>
                  <ul
                    className='no-list hs-error-msgs inputs-list'
                    role='alert'
                  >
                    <li>
                      <label className='hs-error-msg hs-main-font-element'>
                        Please complete this required field.
                      </label>
                    </li>
                  </ul>
                </div>
                <div>
                  <label htmlFor=''>
                    <span>Last name</span>
                  </label>
                  <div className='input'>
                    <input type='text'></input>
                  </div>
                  <ul
                    className='no-list hs-error-msgs inputs-list'
                    role='alert'
                  >
                    <li>
                      <label className='hs-error-msg hs-main-font-element'>
                        Please complete this required field.
                      </label>
                    </li>
                  </ul>
                </div>
              </fieldset>
              <fieldset className='form-columns-2'>
                <div>
                  <label htmlFor=''>
                    <span>Email</span>
                  </label>
                  <div className='input'>
                    <input type='text'></input>
                  </div>
                  <ul
                    className='no-list hs-error-msgs inputs-list'
                    role='alert'
                  >
                    <li>
                      <label className='hs-error-msg hs-main-font-element'>
                        Please complete this required field.
                      </label>
                    </li>
                  </ul>
                </div>
                <div>
                  <label htmlFor=''>
                    <span>Job title</span>
                  </label>
                  <div className='input'>
                    <input type='text'></input>
                  </div>
                  <ul
                    className='no-list hs-error-msgs inputs-list'
                    role='alert'
                  >
                    <li>
                      <label className='hs-error-msg hs-main-font-element'>
                        Please complete this required field.
                      </label>
                    </li>
                  </ul>
                </div>
              </fieldset>
              <fieldset className='form-columns-1'></fieldset>
              <fieldset className='form-columns-1'></fieldset>
              <fieldset className='form-columns-1'></fieldset>
              <fieldset className='form-columns-1'></fieldset>
              <div className='submit'></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
