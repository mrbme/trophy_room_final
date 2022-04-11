import Link from 'next/link'
import Countdown from 'components/countdown.js'
import Container from 'components/container.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Navbar = () => {
  return (
    <nav>
      <div className='bg-black py-1 text-white'>
        <Container>
          <div className='flex flex-row items-center justify-between'>
            <div>
              <Link href='/'>
                <a>
                  <img
                    className='w-16'
                    src='media/trophyroom_logo.png'
                    alt='TrophRoomClub logo'
                  />
                </a>
              </Link>
            </div>
            <div className='flex-wrap md:flex text-special-1 flex flex-row items-center justify-center space-x-5 py-5 text-white'>
              <div>Next season drop: </div>
              <Countdown />
            </div>
            <div className='flex flex-row space-x-2'>
              <a href='https://discord.gg/ejjuSb5q5J' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faDiscord} size='lg' /></a>
              <a href='https://twitter.com/trophyroomclub' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter} size='lg' /></a>
              <a href='https://instagram.com/trophyroomclub' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faInstagram} size='lg' /></a>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  )
}

export default Navbar
