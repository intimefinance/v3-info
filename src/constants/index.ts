import { BigNumber } from '@ethersproject/bignumber'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'
import { SupportedNetwork } from './networks'

export const MAX_UINT128 = BigNumber.from(2).pow(128).sub(1)

export const CORE_TEST_WCORE_ADDRESS = '0xeefc44237354771feb09aa0a18a85ed536f15184' // lowcase

export const WETH_ADDRESSES = [CORE_TEST_WCORE_ADDRESS]

export const TOKEN_HIDE: { [key: string]: string[] } = {
  [SupportedNetwork.CORE_TEST]: [],
}

export const POOL_HIDE: { [key: string]: string[] } = {
  [SupportedNetwork.CORE_TEST]: [],
}

// V3 Factory Start Block
export const START_BLOCKS: { [key: string]: number } = {
  [SupportedNetwork.CORE_TEST]: 9041066,
}

export const V2_ANALYTICS_LINK = 'https://v2-info-intimefinance.netlify.app/'

export const SWAP_APP_LINK = 'https://intimefinance.netlify.app/'

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true,
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5',
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true,
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true,
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true,
  },
}

export const NetworkContextName = 'NETWORK'

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = []
