import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ActivityIndicator, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { IAuthFormData } from '@/types/auth.interface'

export function Auth() {
  const [isReg, setIsReg] = useState(false)

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IAuthFormData> = data => {
    console.log(data)
  }
  const isLogin = false

  return (
    <SafeAreaView>
      <View className='mx-2 items-center justify-center h-full'>
        <View className='w-9/12'>
          <Text className='text-center text-3xl text-black font-medium mb-8'>
            {isReg ? 'Sign Up' : 'Sign In'}
          </Text>
          {isLogin && <ActivityIndicator size='large' color='#47AA52' />}
        </View>
      </View>
    </SafeAreaView>
  )
}
