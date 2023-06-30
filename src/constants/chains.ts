export enum SupportedChainId {
  CORE = 1116,
  CORE_TEST = 1115,
}

export function chainIdToNetworkName(networkId: SupportedChainId) {
  switch (networkId) {
    case SupportedChainId.CORE:
      return 'core'
    case SupportedChainId.CORE_TEST:
      return 'core_test'
    default:
      return 'core'
  }
}
