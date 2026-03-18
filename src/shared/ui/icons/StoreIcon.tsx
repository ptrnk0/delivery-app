import React from 'react'
import { Path, Svg } from 'react-native-svg'

import { IIconProps } from './icons.interface'

export function StoreIcon({ size, color }: IIconProps) {
  return (
    <Svg width={size} height={size} viewBox='0 0 48 48' fill='none'>
      <Path
        d='M8 44H40V20H44L24 4L4 20H8V44ZM26 40H22V28H26V40ZM12 18.723L24 9.123L36 18.723V40H30V24H18V40H12V18.723Z'
        fill={color}
      />
    </Svg>
  )
}
