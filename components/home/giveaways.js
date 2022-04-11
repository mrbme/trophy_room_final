import Container from '@/components/container.js'
import Link from 'next/link'
import Od from '@/components/home/odometer.js'
import Image from 'next/image'
const items = [
  {
    amount: '10 mints',
    description: 'Woodhaven Cherry Classic Crystal Call',
    src: '/media/woodhaven_crystal_call.jpeg',
    url: ''
  },
  {
    amount: '100 mints',
    description: 'Benchmade Saddle Mountain Skinner',
    src: '/media/benchmade_skinner.jpg',
    url: ''
  },

  {
    amount: '250 mints',
    description: 'Dave Smith Turkey Decoy hen and jake pair',
    src: '/media/dave_smith_decoy.jpg',
    url: ''
  },
  {
    amount: '500 mints',
    description: '$500 to Outdoor Retailer',
    src: '/media/outdoors_co.jpg',
    url: ''
  },
  {
    amount: '750 mints',
    description: '$1,000 to Outdoor Retailer',
    src: '/media/outdoors_co.jpg',
    url: ''
  },
  {
    amount: '1500 mints',
    description:
            'Matthews V3X Bow, sight, rest, quiver, release, stabilizer',
    src: '/media/v3x.png',
    url: ''
  },
  {
    amount: '2000 mints',
    description: 'Benelli Super Black Eagle 12 Gauge',
    src: '/media/benelli_sbe.png',
    url: ''
  },
  {
    amount: 'Sell Out!',
    description: 'Outfitter guided Turkey Hunt with Benelli Super Black Eagle 12 Gauge, Benchmade Saddle Mountain Skinner,  $500 to an outdoors retailer and Woodhaven Cherry Classic Crystal Call.',
    src: '/media/turkey_hunt.jpg',
    url: ''
  }
]

const Giveaways = () => (
  <div className='relative text-gray-50'>
    <div className='relative sm:overflow-hidden'>
      <div className='absolute inset-0'>
        <img
          className='h-full w-full object-cover'
          src='/media/forest.jpg'
          alt='Door'
        />
        <div className='absolute inset-0 bg-gray-800 mix-blend-multiply' />
      </div>
      <div className='relative flex h-full flex-col justify-center py-20'>
        <Container>
          <div>
            <h2 className='text-special-2 pb-10 text-center text-5xl'>
              This Season's Giveaways
            </h2>
            {items.map((item, index) => (
              <div className='grid md:grid-cols-2 md:gap-20 items-center pb-12' key={index}>
                <div className={(index % 2 == 0 ? 'order-1 md:order-1' : 'order-2 md:order-2')}>
                  <img src={item.src} className='object-cover h-80 rounded mx-auto' />
                </div>
                <div className={'text-center py-5' + ' ' + (index % 2 == 0 ? 'order-2 md:order-2' : 'order-2 md:order-1')}>
                  <p className='font-bold text-5xl text-special-1'>{item.amount}</p>
                  <h4 className='text-xl'>{item.description}</h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  </div>
)

export default Giveaways
