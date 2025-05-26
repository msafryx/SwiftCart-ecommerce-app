import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import ReturnScreen from "@/components/ui/screen/other/orders/ReturnScreen";
import RefundScreen from "@/components/ui/screen/other/orders/RefundScreen";
import MyOrderScreen from "@/components/ui/screen/other/orders/MyOrderScreen";

const TopTab = createMaterialTopTabNavigator();
export default function MyOrderTopTabNavigator(){
    return(
        <TopTab.Navigator>
            <TopTab.Screen name={'MyOrder'} options={{title:'My Orders'}}  component={MyOrderScreen}/>
            <TopTab.Screen name={'Returns'} component={ReturnScreen}/>
            <TopTab.Screen name={'Refunds'} component={RefundScreen}/>
        </TopTab.Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})