import 'styles/globals.css';
import Head from 'next/head';
import i18n from 'localization';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import type { AppProps } from 'next/app';
import styles from 'styles/app.module.scss';
import { I18nextProvider } from 'react-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Head>
        <link rel="icon" href="/icons/logo.svg" />
        <title>Express 24</title>
      </Head>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.body}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default MyApp;
