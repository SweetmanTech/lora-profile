'use client'

import WagmiProvider from './WagmiProvider'
import { ZoraProfileProvider } from './ZoraProfileProvider'

const Providers = ({ children }: { children: React.ReactNode }) => (
  <WagmiProvider>
    <ZoraProfileProvider>{children}</ZoraProfileProvider>
  </WagmiProvider>
)

export default Providers
