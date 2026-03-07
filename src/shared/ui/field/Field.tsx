import cn from 'clsx'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { TextInput, View } from 'react-native'

import { Text } from '../text/Text'
import { IFieldProps } from './field.interface'

export function Field<T extends Record<string, any>>({
  control,
  name,
  rules,
  className,
  ...props
}: IFieldProps<T>) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error }
      }) => (
        <View className='pb-4'>
          <TextInput
            placeholderClassName='text-lg leading-none'
            autoCapitalize='none'
            className={cn(
              'font-poppins text-md border-b py-3 leading-none',
              error
                ? 'border-red-500'
                : isFocused
                  ? 'border-black'
                  : 'border-gray-300',

              className
            )}
            onFocus={() => setIsFocused(true)}
            textAlignVertical='center'
            value={value || ''}
            onChangeText={onChange}
            onBlur={() => {
              onBlur()
              setIsFocused(false)
            }}
            {...props}
          />

          {error && (
            <View className='absolute bottom-0 leading-none'>
              <Text className='text-sm text-red-500'>{error.message}</Text>
            </View>
          )}
        </View>
      )}
    />
  )
}
