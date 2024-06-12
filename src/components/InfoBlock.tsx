// InfoBlock.tsx
import React from 'react';

interface InfoBlockProps {
  text: string;
  link: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ text, link }) => (
  <div>
    <p className='text-xl leading-7.5 md:font-reckless-neue md:text-4xl md:leading-12 md:tracking-tighter'>
      {text}
    </p>
    <a
      href={link}
      className='underline-link text-lg relative inline-block cursor-pointer'
    >
      {link}
    </a>
  </div>
);

export default InfoBlock;
