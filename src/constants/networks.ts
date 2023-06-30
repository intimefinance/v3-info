import CORE_LOGO_URL from '../assets/images/satoshi-logo-light-circle.png'
import { SupportedChainId } from './chains'

export enum SupportedNetwork {
  CORE,
  CORE_TEST,
}

export type NetworkInfo = {
  chainId: SupportedChainId
  id: SupportedNetwork
  route: string
  name: string
  imageURL: string
  bgColor: string
  primaryColor: string
  secondaryColor: string
  blurb?: string
}

export const CoreNetworkInfo: NetworkInfo = {
  chainId: SupportedChainId.CORE,
  id: SupportedNetwork.CORE,
  route: '',
  name: 'Core',
  bgColor: '#FF6B00',
  primaryColor: '#FF6B00',
  secondaryColor: '#2172E5',
  imageURL: CORE_LOGO_URL,
}

export const CoreTestNetworkInfo: NetworkInfo = {
  chainId: SupportedChainId.CORE_TEST,
  id: SupportedNetwork.CORE_TEST,
  route: 'core_test',
  name: 'Core Test',
  bgColor: '#FF6B00',
  primaryColor: '#FF6B00',
  secondaryColor: '#2172E5',
  imageURL: CORE_LOGO_URL,
}

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [CoreTestNetworkInfo]
