import { Provider } from 'react-redux'
import '../styles/globals.css'
import store from '../store/store'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

function MyApp({ Component, pageProps }) {

  return (<Provider store={store}><Component {...pageProps} /></Provider>)
}

export default MyApp
