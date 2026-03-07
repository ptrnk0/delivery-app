import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Text } from '@/shared/ui'

export function UserScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>User</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {}
})
