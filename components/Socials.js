// links
import Link from 'next/link';

// icons
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiStackOverflowFill,
  RiMailAddFill,
  RiTwitterFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxFill />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiStackOverflowFill />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiMailAddFill />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiTwitterFill />
        </Link>
    </div>
  );
};

export default Socials;
