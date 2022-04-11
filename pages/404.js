import Link from 'next/link'
export default function Custom404 () {
  return (
    <>
      <div className='flex min-h-screen flex-col items-center justify-center space-y-5 bg-gray-800 text-white'>
        <p className='text-3xl font-bold'>Whoops!</p>
        <h1 className='text-wheat-300 text-5xl font-bold md:text-8xl'>
          Page not found
        </h1>
        <Link
          href='/'
          className='text-wheat-400 text-xl font-bold hover:underline'
        >
          Return to home
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
