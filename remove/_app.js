import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import '../styles/global.css'

import configureStore from "../store/index"

const store = configureStore()

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}