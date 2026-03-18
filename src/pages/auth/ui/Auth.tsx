import { Image } from 'expo-image'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Keyboard, Pressable, StyleSheet, View } from 'react-native'
import { KeyboardStickyView } from 'react-native-keyboard-controller'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button, Text } from '@/shared/ui'

import { IAuthFormData } from '../model/auth.types'
import { AuthFields } from './AuthFields'

export function AuthScreen() {
  const [isReg, setIsReg] = useState(false)
  const { top } = useSafeAreaInsets()

  const { handleSubmit, control } = useForm<IAuthFormData>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IAuthFormData> = data => {
    console.log(data)
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={{ paddingTop: top }}>
      <View className='justify-center, items-center pt-4'>
        <Image
          source={require('../../../../assets/icons/carrot.svg')}
          className='mb-8 h-24 w-24'
          contentFit='contain'
          style={styles.carrot}
        />
      </View>

      <KeyboardStickyView offset={{ closed: 0, opened: 200 }}>
        <View className='h-full justify-center px-4'>
          <Text className='font-poppins-semibold mb-2 text-2xl text-black'>
            {isReg ? 'Sign Up' : 'Sign In'}
          </Text>

          <Text className='mb-8 text-sm text-gray-500'>
            Enter your emails and password
          </Text>

          <AuthFields control={control} />

          <Text className='mb-6 text-right text-base'>Forgot password?</Text>

          <Button onPress={handleSubmit(onSubmit)} className='mb-4'>
            {isReg ? 'Sign Up' : 'Sign In'}
          </Button>

          <Pressable onPress={() => setIsReg(!isReg)}>
            <Text className='font-base text-center text-base'>
              {isReg ? 'Already have an account? ' : "Don't have an account? "}

              <Text className='text-emerald-500'>
                {isReg ? 'Sign In' : 'Sign Up'}
              </Text>
            </Text>
          </Pressable>

          {/* {isLogin && <ActivityIndicator size='large' color='#47AA52' />} */}
        </View>
      </KeyboardStickyView>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  carrot: {
    width: 56,
    height: 56
  }
})
