import { Token } from '@uniswap/sdk-core'
import { NetworkInfo, CoreTestNetworkInfo } from 'constants/networks'
import { CORE_TEST_WCORE_ADDRESS, WETH_ADDRESSES } from '../constants'

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol?: string
  name?: string
}

export function serializeToken(token: Token): SerializedToken {
  return {
    chainId: token.chainId,
    address: token.address,
    decimals: token.decimals,
    symbol: token.symbol,
    name: token.name,
  }
}

export function formatTokenSymbol(address: string, symbol: string, activeNetwork?: NetworkInfo) {
  // dumb catch for test WCORE
  if (address === CORE_TEST_WCORE_ADDRESS && activeNetwork === CoreTestNetworkInfo) {
    return 'WCORE'
  }

  if (WETH_ADDRESSES.includes(address)) {
    return 'WCORE'
  }
  return symbol
}

export function formatTokenName(address: string, name: string, activeNetwork?: NetworkInfo) {
  // dumb catch for test WCORE
  if (address === CORE_TEST_WCORE_ADDRESS && activeNetwork === CoreTestNetworkInfo) {
    return 'Wrapped CORE'
  }

  if (WETH_ADDRESSES.includes(address)) {
    return 'Wrapped CORE'
  }
  return name
}
