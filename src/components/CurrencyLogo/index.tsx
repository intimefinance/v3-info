import React, { useMemo } from 'react'
import styled from 'styled-components'
import { isAddress } from 'utils'
import Logo from '../Logo'
// import { useCombinedActiveList } from 'state/lists/hooks'
// import useHttpLocations from 'hooks/useHttpLocations'
import { useActiveNetworkVersion } from 'state/application/hooks'
import { getTokenLogoURL } from 'constants/lists'

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text4};
`

export default function CurrencyLogo({
  address,
  size = '24px',
  style,
  ...rest
}: {
  address?: string
  size?: string
  style?: React.CSSProperties
}) {
  const [activeNetwork] = useActiveNetworkVersion()

  //temp until token logo issue merged
  // const tempSources: { [address: string]: string } = useMemo(() => {
  //   return {
  //     ['0x4dd28568d05f09b02220b09c2cb307bfd837cb95']:
  //       'https://assets.coingecko.com/coins/images/18143/thumb/wCPb0b88_400x400.png?1630667954',
  //   }
  // }, [])

  const srcs: string[] = useMemo(() => {
    const checkSummed = isAddress(address)

    if (checkSummed && address) {
      return [getTokenLogoURL({ address: checkSummed, chainId: activeNetwork.chainId })]
    }
    return []
  }, [address, activeNetwork.chainId])

  return <StyledLogo size={size} srcs={srcs} alt={'token logo'} style={style} {...rest} />
}
