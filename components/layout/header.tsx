import { ShoppingBagIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between w-full items-center mt-3">
          <Link href="/">
            <a>
              <Image
                src="/logo_transparent.png"
                alt="Tech Cube"
                height="50"
                width="50"
              />
            </a>
          </Link>
          <div className="relative cursor-pointer">
            <ShoppingBagIcon className="h-9" />
            <div className="h-6 w-6 absolute -top-1 -right-2 bg-red-500 rounded-full text-white flex justify-center items-center">
              1
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
