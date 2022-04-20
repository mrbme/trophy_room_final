import '../styles/globals.css'
import '../styles/odometer.css'
import Layout from '../components/layout.js'
import { StatusProvider } from '../context/status_context.js'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { DefaultSeo } from 'next-seo'

function MyApp ({ Component, pageProps }) {
  return (
    <StatusProvider>
      <Layout>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Trophy Room Club",
            "url": "https://trophyroomclub.com",
            "logo": "https://trophyroomclub.com/media/trophyroom_logo.png",
            "foundingDate": "2022",
            "sameAs": [
                "https://twitter.com/trophyroomclub",
                "https://instagram.com/trophyroomclub"
            ]
          }`
          }}
        />
        <DefaultSeo
          title='TrophyRoomClub | Mint Sale 5/20/2022 | Get Early Access'
          description='Our continuous NFT collection represents the
                enthusiasm and dedication to the
                outdoors and conservation.'
          canonical='https://trophyroomclub.com'
          openGraph={{
            type: 'Website',
            url: 'https://trophyroomclub.com',
            title: 'TrophyRoomClub | Mint Sale 5/20/2022 | Get Early Access',
            description: 'Our continuous NFT collection represents the enthusiasm and dedication to the outdoors and conservation.',
            images: [
              {
                url: 'https://trophyroomclub.com/media/trc.png',
                width: 1200,
                height: 800,
                alt: 'Trophy Room Club'
              }
            ],
            site_name: 'Trophy Room Club'
          }}
          twitter={{
            handle: '@trophyroomclub',
            site: '@trophyroomclub',
            cardType: 'summary_large_image'
          }}
        />
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
