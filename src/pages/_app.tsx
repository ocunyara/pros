import { Layout } from '../components/Layout'
import Head from 'next/head';
import '@/style/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}