import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ShopList from '../pages/ShopList/component/ShopList';
import MyCart from '../pages/MyCart/component/MyCart';


const _TabNavigator = TabNavigator(
{
  ShopList: {screen: ShopList},
  MyCart: {screen: MyCart},
},
{
  tabBarPosition:'bottom',
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor:'gray',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'white',
    },
    indicatorStyle: {
      backgroundColor: 'blue',
    }
}})


export const AppNavigator = StackNavigator(
  {
    TabNavigator:{screen:_TabNavigator},
  },
  {
    index: 0,
    initialRouteName: "TabNavigator",
    headerMode: "none"
  }
);
