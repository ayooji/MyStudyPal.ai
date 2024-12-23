import 'styles/main.css';
import '../styles/globals.css'
import 'styles/chrome-bug.css';
import { useEffect } from 'react';
import React from 'react';

import Layout from 'components/Layout';
import { UserProvider } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { AppProps } from 'next/app';
import { MyUserContextProvider } from 'utils/useUser';
// 1. import `NextUIProvider` component
import { NextUIProvider, createTheme  } from '@nextui-org/react';

const darkTheme = createTheme({
  type: 'dark',
});


export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <div className="bg-black">
      <UserProvider supabaseClient={supabaseClient}>
        <MyUserContextProvider supabaseClient={supabaseClient}>
          <Layout>
          <NextUIProvider theme={darkTheme}>
            <Component {...pageProps} />
            </NextUIProvider> 
          </Layout>
        </MyUserContextProvider>
      </UserProvider>
    </div>
  );
}
