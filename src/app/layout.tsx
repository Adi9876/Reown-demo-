// src/app/layout.tsx
import Navbar from '@/components/Navbar'
import AppKitProvider from '../app/providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AppKitProvider>
          <Navbar />{children}</AppKitProvider>
      </body>
    </html>
  )
}
