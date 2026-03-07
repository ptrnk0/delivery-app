import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Text } from '@/shared/ui'

export function ExploreScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Explore</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {}
})
