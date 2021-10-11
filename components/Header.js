import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from './Link';

export default function Header({ className = 'text-white bg-black' }) {
  return (
    <header className={'relative z-20 ' + className}>
      <nav className="px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-gray-400 hover:text-gray-500"
            >
              <FontAwesomeIcon icon={['fas', 'home']} className="w-6" />{' '}
              <span className="mt-1 ml-2">Test</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
