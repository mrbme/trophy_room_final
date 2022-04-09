import Link from 'next/link'
export default function Custom404 () {
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-center bg-gray-800 space-y-5 text-white'>
        <p className='text-3xl font-bold'>Whoops!</p>
        <h1 className='text-5xl md:text-8xl font-bold text-wheat-300'>
          Page not found
        </h1>
        <Link href='/'>
          <a
            className='text-xl font-bold text-wheat-400 hover:underline'
            href='/'
          >
            Return to home
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;
          }
        `}
      </style>
    </>
  )
}
