import { SupportedChainId } from 'constants/chains'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId: number]: string } = {
  [SupportedChainId.CORE]: '',
  [SupportedChainId.CORE_TEST]: '',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
