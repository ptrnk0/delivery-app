import React, { useEffect, useImperativeHandle, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { IShowToastParams, IToastHandle } from '@/shared/lib'

import { Text } from '../text'

interface IToastProps {
  ref: React.RefObject<IToastHandle | null>
}

export function Toast({ ref }: IToastProps) {
  const { top } = useSafeAreaInsets()
  const [toast, setToast] = useState<IShowToastParams | null>(null)

  const showToast = (params: IShowToastParams) => {
    setToast(params)
  }

  useImperativeHandle(ref, () => {
    return { showToast }
  })

  useEffect(() => {
    if (!toast) return

    const timeout = setTimeout(() => setToast(null), 3000)

    return () => clearTimeout(timeout)
  }, [toast])

  if (!toast) return null

  return (
    <Animated.View
      entering={SlideInUp.springify(300)}
      exiting={SlideOutUp.springify(3000)}
      style={[styles.container, { top }]}
    >
      <View style={styles.separator} />

      <Text>{toast.body}</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    left: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    borderLeftColor: '',
    flexDirection: 'row',
    gap: 8,
    boxShadow:
      '0 20px 17px 0 rgba(112, 112, 112, 0.00), 0 22px 15px 0 rgba(112, 112, 112, 0.01), 0 10px 13px 0 rgba(112, 112, 112, 0.03), 0 5px 10px 0 rgba(112, 112, 112, 0.04), 0 2px 5px 0 rgba(112, 112, 112, 0.05);'
  },
  separator: { width: 2, height: '100%', backgroundColor: '#00bc7d' }
})
