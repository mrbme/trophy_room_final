import { useState, useEffect } from 'react'
import { useStatus } from '../context/status_context'
import { connectWallet, getCurrentWalletConnected } from '../utils/interact'

const ConnectWallet = () => {
  const { setStatus } = useStatus()
  const [walletAddress, setWalletAddress] = useState('')

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet()
    setWalletAddress(walletResponse.address)
    setStatus(walletResponse.status)
  }

  useEffect(() => {
    const prepare = async () => {
      const walletResponse = await getCurrentWalletConnected()
      setWalletAddress(walletResponse.address)
      setStatus(walletResponse.status)

      addWalletListener()
    }

    prepare()
  }, [])

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0])
          setStatus('')
        } else {
          setWalletAddress('')
          setStatus(
            '🦊 Connect to Metamask using Connect Wallet button.'
          )
        }
      })
    }
  }

  return (
    <div className='bg-gray-900 flex justify-center text-gray-50 text-sm py-2'>
      {walletAddress.length > 0
        ? (
            '✅ Connected: ' +
                    String(walletAddress).substring(0, 6) +
                    '...' +
                    String(walletAddress).substring(38)
          )
        : (
          <button className='' id='walletButton' onClick={connectWalletPressed}>Connect Wallet</button>
          )}
    </div>
  )
}

export default ConnectWallet
