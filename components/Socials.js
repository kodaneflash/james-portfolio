// socials.js
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiStackOverflowFill,
  RiMailAddFill,
  RiTwitterFill,
} from 'react-icons/ri';

const Socials = () => {
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/archermjames/',
    github: 'https://github.com/jamesonarcher',
    stackoverflow: 'https://stackoverflow.com/users/your-id',
    email: 'mailto:jamesonmarcher@gmail.com',
    twitter: 'https://twitter.com/your-username',
  };

  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <a href={socialLinks.linkedin} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxFill />
      </a>
      <a href={socialLinks.github} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </a>
      <a href={socialLinks.stackoverflow} className='hover:text-accent transition-all duration-300'>
        <RiStackOverflowFill />
      </a>
      <a href={socialLinks.email} className='hover:text-accent transition-all duration-300'>
        <RiMailAddFill />
      </a>
      <a href={socialLinks.twitter} className='hover:text-accent transition-all duration-300'>
        <RiTwitterFill />
      </a>
    </div>
  );
};

export default Socials;
