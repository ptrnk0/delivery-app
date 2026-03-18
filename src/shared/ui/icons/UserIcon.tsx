import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'

import { IIconProps } from './icons.interface'

export function UserIcon({ size, color }: IIconProps) {
  return (
    <Svg width={size} height={size} viewBox='0 0 48 48' fill='none'>
      <G clipPath='url(#clip0_2_1210)'>
        <Path
          d='M31.278 25.525C34.144 23.332 36 19.887 36 16C36 9.373 30.627 4 24 4C17.373 4 12 9.373 12 16C12 19.887 13.856 23.332 16.722 25.525C9.84 28.531 5 35.665 5 44H43C43 35.665 38.16 28.531 31.278 25.525ZM16 16C16 11.589 19.589 8 24 8C28.411 8 32 11.589 32 16C32 20.411 28.411 24 24 24C19.589 24 16 20.411 16 16ZM24 28C30.977 28 36.856 33.107 38.525 40H9.475C11.144 33.107 17.023 28 24 28Z'
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id='clip0_2_1210'>
          <Rect width='48' height='48' fill='white' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
