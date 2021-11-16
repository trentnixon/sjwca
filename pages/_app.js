import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import '../styles/global.css'

import configureStore from "../store/index"

const store = configureStore()

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <LoadScript googleMapsApiKey="">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadScript>
    </Provider>
  )
}