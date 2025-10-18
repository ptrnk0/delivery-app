import cn from 'clsx'
import React from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

interface IButtonProps extends PressableProps {
  children: React.ReactNode
  className?: string
}

export function Button({ className, children, ...props }: IButtonProps) {
  return (
    <Pressable {...props} className={cn('self-center, mt-3.5', className)}>
      <Text className={className}>{children}</Text>
    </Pressable>
  )
}
