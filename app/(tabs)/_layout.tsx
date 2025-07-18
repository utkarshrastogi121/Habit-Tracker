import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index' options={{title:"Home"}}/>
        <Tabs.Screen name='login' options={{title:"Login"}}/>
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})