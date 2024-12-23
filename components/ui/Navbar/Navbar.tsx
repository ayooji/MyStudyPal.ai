import Link from 'next/link';
import s from './Navbar.module.css';

import Logo from 'components/icons/Logo';
import { useUser } from 'utils/useUser';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo alt={''} height={''} src={''} className={''} />
              </a>
            </Link>
            <nav className="space-x-2 ml-6 hidden lg:block">
            <Link href="/">
                <a className={s.link}>Home</a>
              </Link>
            <Link href="/account">
                <a className={s.link}>Account</a>
              </Link>
              <Link href="/dashboard">
                <a className={s.link}>Dashboard</a>
              </Link>
              <Link href="/price">
                <a className={s.link}>Pricing</a>
              </Link>
              <Link href="/">
                <a className={s.link}>FAQ</a>
              </Link>
              <Link href="/">
                <a className={s.link}>Support</a>
              </Link>
              
            </nav>
          </div>

          <div className="flex flex-1 justify-end space-x-8">
            {user ? (
              <Link href="/api/auth/logout">
                <a className={s.link}>Sign out</a>
              </Link>
            ) : (
              <Link href="/signin">
                <a className={s.link}>Sign in</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
