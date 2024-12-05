import { useEffect, useState } from 'react'
import Hero from '@/components/home/hero.js'
import About from '@/components/home/about.js'
import UpcomingSeason from '@/components/home/upcoming_season.js'
import Giveaways from '@/components/home/giveaways.js'
import Roadmap from '@/components/home/roadmap.js'

const Index = ({ users }) => {
  const [count, setCount] = useState('')
  const [firstName, setFirstName] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setCount(users.data.length)
  }, [users.data.length])

  const submitForm = async (e) => {
    setLoading(true)
    e.preventDefault()
    let res = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({
        firstName: firstName
      })
    })
    res = await res.json()
    setCount(count + 1)
    setFirstName('')
    setLoading(false)
  }

  return (
    <>
      <div className='mx-auto max-w-3xl py-20 text-3xl'>
        {count}
        <form onSubmit={submitForm}>
          <input
            type='text'
            name='firstName'
            placeholder='Title'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <button type='submit' disabled={!!loading}>
            {loading ? 'Adding' : 'Add'}
          </button>
        </form>
      </div>
      <Hero />
      <About />
      <UpcomingSeason />
      <Giveaways />
      <Roadmap />
    </>
  )
}

export async function getServerSideProps (context) {
  const res = await fetch('http://localhost:3000/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const users = await res.json()

  return {
    props: { users }
  }
}

export default Index
