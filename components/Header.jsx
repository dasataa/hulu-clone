
import Image from 'next/image';
import { HeaderItem } from './HeaderItem';
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

export const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='Home' Icon={HomeIcon} />
        <HeaderItem title='Trending' Icon={LightningBoltIcon} />
        <HeaderItem title='Verified' Icon={BadgeCheckIcon} />
        <HeaderItem title='Collections' Icon={CollectionIcon} />
        <HeaderItem title='Search' Icon={SearchIcon} />
        <HeaderItem title='Account' Icon={UserIcon} />
      </div>

      <Image
        className='object-contain'
        src='https://www.logo.wine/a/logo/Hulu/Hulu-Logo.wine.svg'
        alt='hulu logo'
        width={200}
        height={100}
      />
    </header>
  );
};
