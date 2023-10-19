import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react'; // Import useEffect hook

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Effect to send pageview updates to Google Analytics on route changes
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
}, [router.events]);


  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
