import cn from 'clsx'
import React from 'react'
import { Pressable, PressableProps } from 'react-native'

import { Text } from '../text/Text'

interface IButtonProps extends PressableProps {
  children: React.ReactNode
  className?: string
}

export function Button({ className, children, ...props }: IButtonProps) {
  return (
    <Pressable
      {...props}
      className={cn(
        'self-center, mt-3.5 items-center rounded-2xl bg-emerald-500 py-4',
        className
      )}
    >
      <Text className='text-base font-semibold text-white'>{children}</Text>
    </Pressable>
  )
}
