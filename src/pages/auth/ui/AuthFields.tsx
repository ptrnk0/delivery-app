import React from 'react'
import { Control } from 'react-hook-form'
import { View } from 'react-native'

import { Field, Text } from '@/shared/ui'

import { IAuthFormData } from '../model/auth.types'

interface IAuthFieldsProps {
  control: Control<IAuthFormData>
}

export function AuthFields({ control }: IAuthFieldsProps) {
  return (
    <>
      <View className='mb-8'>
        <Text className='font-poppins-semibold mb-4 text-base text-gray-500'>
          Email
        </Text>

        <Field<IAuthFormData>
          name='email'
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email'
            }
          }}
          control={control}
          placeholder='Email'
          keyboardType='email-address'
        />
      </View>

      <View className='mb-8'>
        <Text className='font-poppins-semibold mb-4 text-base text-gray-500'>
          Password
        </Text>

        <Field<IAuthFormData>
          name='password'
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long'
            }
          }}
          control={control}
          placeholder='Password'
          keyboardType='default'
          secureTextEntry
        />
      </View>
    </>
  )
}
