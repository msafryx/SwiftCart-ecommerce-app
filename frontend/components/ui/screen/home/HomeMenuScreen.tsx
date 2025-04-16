import {View, Text, StyleSheet} from "react-native";
import * as React from 'react';

import { Menu } from 'react-native-paper';
import {COLORS} from "@/constants/ColourPallete";

export default function HomeMenuScreen({navigation}:any){
    return(
        <View style={styles.container}>
                <Menu.Item leadingIcon="redo" onPress={() => {navigation.navigate('MyOrders')}} title="My Orders" />
                <Menu.Item leadingIcon="undo" onPress={() => {navigation.navigate('Settings')}} title="Settings" />
                <Menu.Item leadingIcon="content-copy" onPress={() => {navigation.navigate('DailyDeals')}} title="Daily Deals"  />
                <Menu.Item leadingIcon="content-paste" onPress={() => {navigation.navigate('Vouchers')}} title="Vouchers" />
                <Menu.Item leadingIcon="content-cut" onPress={() => {navigation.navigate('Notifications')}} title="Notifications"  />
                <Menu.Item leadingIcon="content-cut" onPress={() => {navigation.navigate('LatestProducts')}} title="Latest Products"  />
                <Menu.Item leadingIcon="content-cut" onPress={() => {navigation.navigate('Profile')}} title="Profile"  />
                <Menu.Item leadingIcon="content-cut" onPress={() => {navigation.navigate('CustomerCare')}} title="Customer Care"  />
                <Menu.Item leadingIcon="content-cut" onPress={() => {navigation.navigate('LogOut')}} title="Logout"  />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.light
    }
})