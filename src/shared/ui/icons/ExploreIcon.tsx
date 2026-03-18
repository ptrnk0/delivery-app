import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'

import { IIconProps } from './icons.interface'

export function ExploreIcon({ size, color }: IIconProps) {
  return (
    <Svg width={size} height={size} viewBox='0 0 48 48' fill='none'>
      <G clipPath='url(#clip0_2_2054)'>
        <Path
          d='M18 32C21.144 32 24.036 30.951 26.373 29.201L40 42.829L42.828 40L29.201 26.373C30.951 24.036 32 21.144 32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32ZM18 8C23.514 8 28 12.486 28 18C28 23.514 23.514 28 18 28C12.486 28 8 23.514 8 18C8 12.486 12.486 8 18 8Z'
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id='clip0_2_2054'>
          <Rect width='48' height='48' fill='white' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
