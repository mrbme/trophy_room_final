import Container from '@/components/container.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlagCheckered, faAward, faFlask, faCode } from '@fortawesome/free-solid-svg-icons'

const timeline = [
  {
    id: 1,
    content: 'Inaugural Mint',
    date: 'May 2022',
    datetime: '2022-05-01',
    icon: function () {
      return (
        <FontAwesomeIcon icon={faFlagCheckered} size='lg' />
      )
    },
    iconBackground: 'bg-black'
  },
  {
    id: 2,
    content: 'Giveways awarded to minters; Revenue awarded to determined charity.',
    date: 'June 2022',
    datetime: '2022-06-22',
    icon: function () {
      return (
        <FontAwesomeIcon icon={faAward} size='lg' />
      )
    },
    iconBackground: 'bg-blue-900'
  },
  {
    id: 3,
    content: 'New season: Whitetail & Elk',
    date: 'November 2022',
    datetime: '2022-11-01',
    icon: function () {
      return (
        <FontAwesomeIcon icon={faFlask} size='lg' />
      )
    },
    iconBackground: 'bg-green-700'
  },
  {
    id: 4,
    content: 'Giveways awarded to minters; Revenue awarded to determined charity.',
    date: 'December 2022',
    datetime: '2022-12-22',
    icon: function () {
      return (
        <FontAwesomeIcon icon={faAward} size='lg' />
      )
    },
    iconBackground: 'bg-yellow-500'
  },
  {
    id: 5,
    content: 'Begin Development of TrohpyRoomClub Network',
    date: 'December 2022',
    datetime: '2022-12-22',
    icon: function () {
      return (
        <FontAwesomeIcon icon={faCode} size='lg' />
      )
    },
    iconBackground: 'bg-red-700'
  },
  {
    id: 6,
    content: 'New season: Waterfowl',
    date: 'January 2023',
    datetime: '2023-01-01',
    icon: function () {
      return (
        <FontAwesomeIcon icon={faFlask} size='lg' />
      )
    },
    iconBackground: 'bg-green-700'
  },
  {
    id: 7,
    content: 'Giveways awarded to minters; Revenue awarded to determined charity.',
    date: 'Feburary 2023',
    datetime: '2023-02-01',
    icon: function () {
      return (
        <FontAwesomeIcon icon={faAward} size='lg' />
      )
    },
    iconBackground: 'bg-yellow-500'
  },
  {
    id: 8,
    content: 'Launch of TrohpyRoomClub Network',
    date: 'April 2023',
    datetime: '2023-04-01',
    icon: function () {
      return (
        <FontAwesomeIcon icon={faCode} size='lg' />
      )
    },
    iconBackground: 'bg-red-700'
  },
  {
    id: 9,
    content: 'Ongoing Members Access Token Mints & Exclusive Game Animal NFTs',
    date: 'April 2023 & Beyond',
    datetime: '2023-04-01',
    icon: function () {
      return (
        <FontAwesomeIcon icon={faFlask} size='lg' />
      )
    },
    iconBackground: 'bg-blue-500'
  }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

const Roadmap = () => (
  <div className='bg-gray-900 py-20 text-gray-50'>
    <Container>
      <h2 className='text-special-2 text-center text-6xl'>
        Proejct Roadmap
      </h2>
      <div className='flow-root pt-20'>
        <ul role='list' className='-mb-8'>
          {timeline.map((event, eventIdx) => (
            <li key={event.id}>
              <div className='relative pb-16 md:pb-28'>
                {eventIdx !== timeline.length - 1
                  ? (
                    <span
                      className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                      aria-hidden='true'
                    />
                    )
                  : null}
                <div className='relative flex space-x-3'>
                  <div>
                    <span
                      className={classNames(
                        event.iconBackground,
                        'flex h-10 w-10 items-center justify-center rounded-full ring-8 ring-white'
                      )}
                    >
                      {event.icon()}
                    </span>
                  </div>
                  <div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
                    <div>
                      <p className='pl-5 md:text-lg text-gray-50 md:tracking-wider'>
                        {event.content}
                      </p>
                    </div>
                    <div className='whitespace-nowrap md:text-lg text-special-1 text-right text-gray-50'>
                      <time dateTime={event.datetime}>
                        {event.date}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
    <div className='flex justify-center pt-10'>
      <a href='/' className='rounded border-2 border-solid border-gray-50 bg-black px-10 py-2 font-bold text-white shadow-xl hover:bg-white hover:text-gray-800'>
        Get on the Whitelist
      </a>
    </div>
  </div>
)

export default Roadmap
