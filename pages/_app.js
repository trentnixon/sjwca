import { Provider } from 'react-redux'
import {useHost} from '../actions/useHost'
import Layout from '../components/Layout'
import { LoadScript } from '@react-google-maps/api';
import '../styles/global.css'

import configureStore from "../store/index"
import { useRouter } from 'next/router';
import { useEffect } from "react";
const store = configureStore()

let APIKEY = process.env.NEXT_PUBLIC_REACT_APP_GOOGLEAPI;

export default function MyApp({ Component, pageProps }) {
  const [host,FindHost] = useHost()
    useEffect(()=>{ FindHost() },[host])
    
  const router = useRouter();
  const handleRouteChange = (url) => {
    window.gtag('config', 'G-0J9HMMYH4W', {page_path: url, });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
       <LoadScript googleMapsApiKey={APIKEY}>
        <Layout>
          <Component {...pageProps} />
        </Layout> 
      </LoadScript> 
    </Provider>
  ) 
}