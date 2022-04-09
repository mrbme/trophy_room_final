import Container from '@/components/container.js'
import Link from 'next/link'
import Od from '@/components/home/odometer.js'

const items = [
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
    description: '$500 to Outfitter Retailer',
    src: '/media/outdoors_co.jpg',
    url: ''
  },
  {
    amount: '750 mints',
    description: '$1,000 to Outfitter Retailer',
    src: '/media/outdoors_co.jpg',
    url: ''
  },
  {
    amount: '1000 mints',
    description:
            'Matthews V3X Bow, sight, rest, quiver, release, stabilizer',
    src: '/media/v3x.png',
    url: ''
  },
  {
    amount: '1500 mints',
    description: 'Benelli Super Black Eagle 12 Gauge',
    src: '/media/benelli_sbe.png',
    url: ''
  },
  {
    amount: 'Sell Out!',
    description: 'Guided Turkey Hunt + Gun + knife + $500 in retailer + Turkey Pack + Calls',
    src: '/media/turkey_hunt.jpg',
    url: ''
  }
]

const CurrentSeason = () => (
  <div className='bg-gray-900 py-10 text-gray-100'>
    <Container>
      <div className='py-24'>
        <h2 className='text-special-2 pb-10 text-center text-5xl'>
          This Season's Giveaways
        </h2>
        {items.map((item, index) => (
          <div className='grid md:grid-cols-2 md:gap-20 items-center pb-12' key={index}>
            <div className={(index % 2 == 0 ? 'order-2 md:order-1' : 'order-1 md:order-2')}>
              <img src={item.src} className='object-cover h-80 rounded' />
            </div>
            <div className={'text-center' + ' ' + (index % 2 == 0 ? 'order-1 md:order-2' : 'order-2 md:order-1')}>
              <p className='font-bold text-5xl text-special-1'>{item.amount}</p>
              <h4 className='text-xl'>{item.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </div>
)

export default CurrentSeason
