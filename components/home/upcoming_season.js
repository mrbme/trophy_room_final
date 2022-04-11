import Container from '@/components/container.js'
const UpcomingSeason = () => (
  <div className='bg-gray-900 py-20 text-gray-100'>
    <Container>
      <h2 className='text-special-2 pt-10 text-center text-4xl font-bold tracking-wide'>
        Upcoming Season
      </h2>
      <div className='flex flex-col py-5'>
        <div className='text-special-1 text-center text-3xl'>
          Turkey Season Opens May 06, 2022
        </div>
        <p className='text-special-1 py-5 text-center text-xl'>
          2750 unique designs
        </p>
        <div className='text-center'>
          Donations go to:
          <a
            target='_blank'
            href='https://www.nwtf.org/'
            className='text-special-1 pl-5 text-xl hover:underline'
            rel='noreferrer'
          >
            <img
              className='mx-auto h-36'
              src='media/nwtf_logo.png'
              alt='NWTF Logo'
            />
            NWTF (National Wild Turkey Federation)
          </a>
        </div>
        <div className='flex justify-center pt-10'>
          <a
            href='/'
            className='rounded border-2 border-solid border-gray-50 bg-black px-3 py-2 font-bold text-white shadow-xl hover:bg-white hover:text-gray-800'
          >
            Get on the Whitelist
          </a>
        </div>
      </div>
    </Container>
  </div>
)

export default UpcomingSeason
