import cn from 'clsx'
import React from 'react'
import { Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { IFieldProps } from './field.interface'

export function Field<T extends Record<string, any>>({
  control,
  name,
  rules,
  className,
  ...props
}: IFieldProps<T>) {
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
              'border-b py-3 text-lg leading-none',
              error ? 'border-red-500' : 'border-gray-300',
              className
            )}
            textAlignVertical='center'
            value={value || ''}
            onChangeText={onChange}
            onBlur={onBlur}
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
