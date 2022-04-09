import Link from 'next/link'

const Index = () => {
  return (
    <>
      <div className='relative min-h-screen'>
        <div className='h-screen relative sm:overflow-hidden'>
          <div className='absolute inset-0'>
            <img
              className='h-full w-full object-cover'
              src='/media/doors_3.jpg'
              alt='Door'
            />
            <div className='absolute inset-0 bg-gray-400 mix-blend-multiply' />
          </div>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 h-full flex flex-col justify-center'>
            <h1 className='text-special-2 text-center font-bold text-8xl tracking-wide text-white'>
              Trophy Room
            </h1>
            <p className='text-special-3 mt-6 max-w-lg mx-auto text-center text-2xl text-white sm:max-w-3xl'>
              Unique digital collectables for the hunting and outdoors enthusiast.
            </p>
            <div className='text-special-3 mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
              <Link href='/enter'>
                <a
                  href='/enter'
                  className='hover:bg-gray-100 bg-white text-black px-16 py-2'
                >
                  Enter
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Index
