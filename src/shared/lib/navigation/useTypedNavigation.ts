import { NavigationProp, useNavigation } from '@react-navigation/native'

import { RootStackParamList } from './navigation.types'

export function useTypedNavigation() {
  return useNavigation<NavigationProp<RootStackParamList>>()
}
