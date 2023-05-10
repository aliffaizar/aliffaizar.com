import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { ABOUT } from '../constants';

export default function About() {
  return (
    <section id='about' className='px-0 md:px-4 py-8 lg:px-8 w-full'>
      <h1 className='text-center text-3xl md:text-4xl font-bold'>About Me</h1>
      <div className='py-8 px-0 md:px-2 lg:px-4 z-0'>
        <SyntaxHighlighter
          language='javascript'
          showLineNumbers
          wrapLongLines
          showInlineLineNumbers
          style={nightOwl}
        >
          {ABOUT}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}
