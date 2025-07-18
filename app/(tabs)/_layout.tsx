import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:'coral'}}>
        <Tabs.Screen name='index' options={{
            title:"Home",
            tabBarIcon:({color})=>(
                <FontAwesome name="home" size={24} color={color} />
            ),
        }}/>
        <Tabs.Screen name='login' options={{title:"Login"}}/>
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})