'use client'

import { baseSepoliaETH } from '@reown/appkit-pay'
import { usePay } from '@reown/appkit-pay/react'
import { useState } from 'react'

export default function Home() {
  const [status, setStatus] = useState('')
  const { open, isPending } = usePay({
    onSuccess: () => setStatus('Payment successful!'),
    onError: (err) => {
      console.error('Payment Error:', err)
      setStatus(`Payment failed: ${err || 'Unknown error'}`)
    },
  })

  const rwaincToken = {
    network: 'eip155:11155111',
    asset: '0xYourRWAINCTokenAddress', // Replace this
    metadata: {
      name: 'RWAINC Token',
      symbol: 'RWAINC',
      decimals: 18,
    },
  }

  const handlePay = async () => {
    setStatus('Opening payment modal...')
    try {
      await open({
        recipient: '0x332c6A8bcd0C407CF01570aBFeAd840948e01893',
        amount: 0.001,
        paymentAsset: baseSepoliaETH, // we can replace it with rwainc token
      })
    } catch (e) {
      console.error('Open failed:', e)
      setStatus('Payment modal failed to open.')
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Buy Service</h1>
      <button onClick={handlePay} disabled={isPending}>
        {isPending ? 'Processing...' : 'Pay with Crypto'}
      </button>
      <p>{status}</p>
    </div>
  )
}
