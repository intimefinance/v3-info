import { SupportedChainId, chainIdToNetworkName } from './chains'

// used to mark unsupported tokens, these are hosted lists of unsupported tokens
export const UNSUPPORTED_LIST_URLS: string[] = []
export const CORE_TEST_LIST = 'https://raw.githubusercontent.com/intimefinance/intime-token-list/main/tokenlist.json'

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  CORE_TEST_LIST,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [CORE_TEST_LIST]

export const getTokenLogoURL = ({ address, chainId }: { address: string; chainId: SupportedChainId }) => {
  const networkName = chainIdToNetworkName(chainId)
  return `https://raw.githubusercontent.com/intimefinance/intime-token-list/main/assets/${networkName}/${address}/logo.png`
}
