import Link from 'next/link'
import Container from '@/components/container.js'

const Hero = () => (
  <div className='relative'>
    <div className='relative sm:overflow-hidden'>
      <div className='absolute inset-0'>
        <img
          className='h-full w-full object-cover'
          src='/media/fireplace.jpg'
          alt='Door'
        />
        <div className='absolute inset-0 bg-gray-400 mix-blend-multiply' />
      </div>
      <div className='relative flex h-full flex-col justify-center px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
        <Container>
          <div className='grid md:grid-cols-2'>
            <div>
              <p className='text-special-1 py-5 text-xl text-white'>
                Launching 5/20/22
              </p>
              <h1 className='text-special-2 text-5xl text-white'>
                Welcome to The Trophy Room Club
              </h1>
              <p className='py-5 text-xl text-white'>
                Our continuous NFT collection represents the
                enthusiasm and dedication to the
                outdoors and conservation.
              </p>
              <p className='py-5 text-xl text-white'>
                <span className='font-extrabold underline text-2xl'>20%</span> of all initial sales, of every season, will be donated to
                help fund conservation efforts to protect our
                wetlands, public lands and game animals.
              </p>
              <div className='py-10'>
                <div className='block md:hidden'>
                  <img
                    src='media/turkey.gif'
                    alt='Turkey'
                    className='mx-auto my-5 max-h-[500px] text-center shadow-lg ring-2 ring-gray-700'
                  />
                </div>
                <div>
                  <a href='https://discord.gg/ejjuSb5q5J' target='_blank' className='rounded border-2 border-solid border-gray-50 bg-black px-3 py-2 font-bold text-white shadow-xl hover:bg-white hover:text-gray-800' rel='noreferrer'>
                    Get on the Whitelist
                  </a>
                </div>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='mx-auto flex flex-col justify-center'>
                <img
                  src='media/turkey.gif'
                  alt='Turkey'
                  className='mx-auto my-5 max-h-[500px] text-center shadow-lg ring-2 ring-gray-200'
                />
                <button disabled href='/' className='text-gray-700 w-64 mx-auto rounded border-2 border-solid border-gray-700 bg-black px-3 py-2 font-bold text-white shadow-xl'>
                  Mint not available yet
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  </div>
)
export default Hero
