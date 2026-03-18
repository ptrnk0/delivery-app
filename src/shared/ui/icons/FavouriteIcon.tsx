import React from 'react'
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg'

import { IIconProps } from './icons.interface'

export function FavouriteIcon({ size, color }: IIconProps) {
  return (
    <Svg width={size} height={size} viewBox='0 0 48 48' fill='none'>
      <G clipPath='url(#clip0_2_2151)'>
        <Path
          d='M30.18 17.167L24 4L17.82 17.167L4 19.279L14 29.528L11.639 44L24 37.167L36.361 44L34 29.528L44 19.279L30.18 17.167ZM31.137 26.734L29.727 28.179L30.052 30.171L31.087 36.513L25.935 33.665L24 32.597L22.065 33.667L16.913 36.515L17.948 30.173L18.273 28.181L16.863 26.736L12.299 22.059L18.424 21.123L20.534 20.801L21.441 18.869L24 13.414L26.559 18.867L27.466 20.799L29.576 21.121L35.701 22.057L31.137 26.734Z'
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id='clip0_2_2151'>
          <Rect width='48' height='48' fill='white' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
