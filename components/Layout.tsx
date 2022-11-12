import { Box } from "./Box.js";
import { PageMeta } from '../types';
import { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  children: ReactNode;
  meta?: PageMeta;
}



export function Layout({ children, meta: pageMeta }: Props) {
  const router = useRouter();
  const meta = {
    title: 'Mystudypal.ai',
    description: ' MyStudyPal.ai is the smartest and easiest way to get help with your school work.',
    canonical: 'http://Mystudypal-ai/#',
    meta:{
      charset: 'UTF-8',
      name: {
        keywords: 'Study helper, AI, mystudypal.ai, mystudypal, essay writing, math solving, code writing, study, college essay, essay help, code help, math help, ai answer generator'
       },
     },
    cardImage: '/MyStudyPal.jpg',

    ...pageMeta
  };


  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/MyStudyPal.jpg" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`http://localhost:3000/#`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mystudypal.ai" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
      </Head>
      <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
   
  </Box>
     
    </>
  );
}

export default Layout;