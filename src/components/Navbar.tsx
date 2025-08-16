
'use client'

export default function Navbar() {
  return (
   <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: '1rem', border: '1px solid #ccc' }}>
  <span>Reown Wallet App</span>
  <appkit-button label="Connect Wallet" size="sm" />
</nav>

  )
}
