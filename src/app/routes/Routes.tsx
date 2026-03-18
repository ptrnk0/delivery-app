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

import { useIsAuthenticate, useIsNotAuthenticated } from '@/entities/auth'

import {
  CartIcon,
  ExploreIcon,
  FavouriteIcon,
  StoreIcon,
  UserIcon
} from '@/shared/ui'

import { TabBar } from '../ui/tab-bar'

const BottomTab = createBottomTabNavigator({
  tabBar: TabBar,
  screenOptions: {
    headerShown: false
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon: StoreIcon
      }
    },
    Cart: {
      screen: CartScreen,
      options: {
        tabBarIcon: CartIcon
      }
    },
    Explore: {
      screen: ExploreScreen,
      options: {
        tabBarIcon: ExploreIcon
      }
    },
    Favourite: {
      screen: FavouriteScreen,
      options: { tabBarIcon: FavouriteIcon }
    },
    User: { screen: UserScreen, options: { tabBarIcon: UserIcon } }
  }
})

const RootStack = createNativeStackNavigator({
  screenOptions: { headerShown: false },
  groups: {
    SignedIn: {
      if: useIsAuthenticate,
      screens: {
        Root: BottomTab
      }
    },
    SignedOut: {
      if: useIsNotAuthenticated,
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
