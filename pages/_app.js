import '../styles/globals.css'
import '../styles/odometer.css'
import Layout from '../components/layout.js'
import { StatusProvider } from '../context/status_context.js'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp ({ Component, pageProps }) {
  return (
    <StatusProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}
      </style>
    </StatusProvider>
  )
}

export default MyApp
