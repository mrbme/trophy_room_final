import Container from '@/components/container.js'
import Od from '@/components/home/odometer.js'
const About = () => (
  <div className='bg-black py-20 text-gray-100'>
    <Container classList='space-y-5 md:px-36'>
      <h2 className='text-special-1 text-center text-3xl'>
        For Hunters, Anglers and Outdoor Enthusiasts
      </h2>
      {/* <Od /> */}
      <img
        src='/media/trophy_mount.png'
        className='mx-auto h-48'
        alt='Trophy Mount'
      />
      <p className='text-center text-3xl font-bold text-special'>
        Our core mission is give back to the outdoors community through
        the sale of exclusive NFTs all while fulfilling our longterm
        roadmap.
      </p>
      <p className='text-center text-xl'>
        Each collection, or "Season", will be a set of unique,
        algorithmically generated NFTs of a particular popular game
        animal. Each animal will contain features and attributes of
        varying rarities. During each season, minters will have a chance
        to win gear associates with the harvest of each animal.
      </p>
      <p className='text-center text-xl'>
        Last but not least, 20% of every initial mint will be donated to
        a charity associated with each season.
      </p>
      {/* <p className='text-xl'>
        Our ultimate mission of the Trohpy Room Club is to create a token-holders only digital property
        where members can have a dedicated place to discuss all things outdoors. From the best gear for your elk hunt, to public land tips, to how to step up carolina rig and more. Every member, through the purchase of their NFT, will also have given back to each charity for that season.
      </p> */}
      <h2 className='text-special-2 text-4xl font-bold tracking-wide text-center pt-10'>
        Upcoming Season
      </h2>
      <p className='text-special-1 py-5 text-center text-xl'>
        2500 unique designs
      </p>
      <div className='flex flex-col'>
        <div className='text-special-1 text-center text-3xl'>
          Turkey Season Opens May 1, 2022
        </div>
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
      </div>
    </Container>
  </div>
)

export default About
