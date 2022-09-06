import { useState } from 'react';
import axios from 'axios';
import LoadIcon from '../icons/LoadIcon';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [sent, setSent] = useState(false);
  const handleChange = (e) => {
    setForm((val) => ({ ...val, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await fetch('/sendMessage', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      setIsLoading(false);
      setSent(true);
      setForm({ message: '', email: '', name: '' });
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log(error.message);
    }
  };
  return (
    <div
      id='contact'
      className='w-full min-h-[500px] flex items-center justify-center'
    >
      <div className='bg-gray-800 space-y-5 p-9 rounded w-10/12 md:w-8/12 lg:w-6/12'>
        <h1 className='text-center text-gray-200 font-semibold text-3xl'>
          Contact Me
        </h1>
        <form className='flex flex-col space-y-3' onSubmit={handleSubmit}>
          <div>
            <label className='block'>name</label>
            <input
              className='w-full bg-black/20 ring-1 ring-cyan-600/40 rounded py-1 px-3 focus:outline focus:outline-cyan-600'
              type='text'
              required
              name='name'
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='block'>email</label>
            <input
              className='w-full bg-black/20 ring-1 ring-cyan-600/40 rounded py-1 px-3 focus:outline focus:outline-cyan-600'
              type='email'
              required
              name='email'
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='block'>message</label>
            <textarea
              className='w-full bg-black/20 rounded resize-none py-1 px-3 ring-1 ring-cyan-600/40 focus:outline focus:outline-cyan-600'
              required
              rows='3'
              name='message'
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <div className=''>
            {!isLoading ? (
              <button className='float-right rounded bg-cyan-600 justify-center items-center text-gray-200 h-10 flex w-full md:w-40'>
                Send
              </button>
            ) : (
              <button
                disabled
                className='float-right rounded bg-cyan-600 justify-center items-center text-gray-200 h-10 flex w-full md:w-40'
              >
                <span className=' motion-safe:animate-spin'>
                  <LoadIcon width='20' height='20' />
                </span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
