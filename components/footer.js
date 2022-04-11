import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Container from './container.js'
const Footer = () => {
  return (
    <div className='bg-black py-10 text-gray-100'>
      <Container>
        <div className='flex flex-row justify-between items-center'>
          <div>
            <img className='h-32 w-32' src='/media/trophyroom_logo.png' alt='TrophyRoomClub logo' />
          </div>
          <div className='space-x-3'>
            <Link href='/privacy'>
              <a href='/privacy'>Privacy</a>
            </Link>
            <Link href='/rules'>
              <a href='/rules'>Rules</a>
            </Link>
          </div>
          <div className='flex flex-row space-x-2'>
            <a href='https://discord.gg/ejjuSb5q5J' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faDiscord} size='lg' /></a>
            <a href='https://twitter.com/trophyroomclub' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter} size='lg' /></a>
            <a href='https://instagram.com/trophyroomclub' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faInstagram} size='lg' /></a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
