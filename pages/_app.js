import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import { LoadScript } from '@react-google-maps/api';
import '../styles/global.css'

import configureStore from "../store/index"

const store = configureStore()

let APIKEY = process.env.NEXT_PUBLIC_REACT_APP_GOOGLEAPI;

export default function MyApp({ Component, pageProps }) {

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