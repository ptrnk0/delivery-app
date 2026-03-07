import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { AuthScreen } from '@/pages/auth'
import { CartScreen } from '@/pages/cart'
import { ExploreScreen } from '@/pages/explore'
import { FavouriteScreen } from '@/pages/favourite'
import { HomeScreen } from '@/pages/home'
import { UserScreen } from '@/pages/user'

import { useSession } from '@/entities/session'

import { TabBar } from '../ui/tab-bar'

const BottomTab = createBottomTabNavigator({
  tabBar: TabBar,
  screens: {
    Home: HomeScreen,
    Cart: CartScreen,
    Explore: ExploreScreen,
    Favourite: FavouriteScreen,
    User: UserScreen
  }
})

const RootStack = createNativeStackNavigator({
  screenOptions: { headerShown: false },
  groups: {
    SignedIn: {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      if: () => !useSession().user,
      screens: {
        Root: BottomTab
      }
    },
    SignedOut: {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      if: () => !!useSession().user,
      screens: {
        Auth: AuthScreen
      }
    }
  }
})

const Navigation = createStaticNavigation(RootStack)

export function Routes() {
  return <Navigation />
}
