import {createStackNavigator} from '@react-navigation/stack'
import HomeBottomTabNavigation from "@/app/navigation/tab-navigation/HomeBotoomTabNavigation";
import CustomerCareScreen from "@/components/ui/screen/other/CustomerCareScreen";
import DailyDealsScreen from "@/components/ui/screen/other/DailyDealsScreen";
import LatestProductsScreen from "@/components/ui/screen/other/LatestProductsScreen";
import MyOrderScreen from "@/components/ui/screen/other/orders/MyOrderScreen";
import NotificationsScreen from "@/components/ui/screen/other/NotificationsScreen";
import ProfileScreen from "@/components/ui/screen/other/ProfileScreen";
import SettingsScreen from "@/components/ui/screen/other/SettingsScreen";
import VouchersScreen from "@/components/ui/screen/other/VouchersScreen";
import LogOutScreen from "@/components/ui/screen/other/LogOutScreen";
import LoginScreen from "@/components/ui/screen/security/LoginScreen";
import SignupScreen from "@/components/ui/screen/security/SignupScreen";
import MyOrderTopTabNavigator from "@/app/navigation/tab-navigation/MyOrderTopTabNavigator";
import SignupVerifyEmailScreen from "@/components/ui/screen/security/SignupVerifyEmailScreen";
import ChangePasswordScreen from "@/components/ui/screen/security/ChangePasswordScreen";
import ResetPasswordVerifyEmailScreen from "@/components/ui/screen/security/ResetPasswordVerifyEmailScreen";
import ResetPasswordScreen from "@/components/ui/screen/security/ResetPasswordScreen";
import ProductDetailsScreen from "@/components/ui/screen/ProductDetailsScreen";
const Stack = createStackNavigator();
export default function StackNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Process'}
                          options={{headerLeft: () => null, headerShown: false}}
                          component={HomeBottomTabNavigation}/>
            <Stack.Screen name={'CustomerCare'}
                          options={{title: 'Customer Care'}}
                          component={CustomerCareScreen}/>
            <Stack.Screen name={'DailyDeals'}
                          options={{title: 'Daily Deals'}}
                          component={DailyDealsScreen}/>
            <Stack.Screen name={'LatestProducts'}
                          options={{title: 'Latest Products'}}
                          component={LatestProductsScreen}/>
            <Stack.Screen name={'MyOrders'}
                          options={{title: 'My Orders'}}
                          component={MyOrderTopTabNavigator}/>
            <Stack.Screen name={'Notifications'}
                          options={{title: 'Notifications'}}
                          component={NotificationsScreen}/>
            <Stack.Screen name={'Profile'}
                          options={{title: 'Profile'}}
                          component={ProfileScreen}/>
            <Stack.Screen name={'Settings'}
                          options={{title: 'Settings'}}
                          component={SettingsScreen}/>
            <Stack.Screen name={'Vouchers'}
                          options={{title: 'Vouchers'}}
                          component={VouchersScreen}/>
            <Stack.Screen name={'LogOut'}
                          options={{title: 'Log Out'}}
                          component={LogOutScreen}/>
            <Stack.Screen name={'Login'}
                          options={{title: 'Login Here '}}
                          component={LoginScreen}/>
            <Stack.Screen name={'Signup'}
                          options={{title: 'Register Here '}}
                          component={SignupScreen}/>
            <Stack.Screen name={'SignupVerifyEmail'}
                          options={{title: 'Verify Your Email  '}}
                          component={SignupVerifyEmailScreen}/>
            <Stack.Screen name={'ChangePasswordScreen'}
                          options={{title: 'Change Your Password  '}}
                          component={ChangePasswordScreen}/>
            <Stack.Screen name={'ResetPasswordVerifyEmailScreen'}
                          options={{title: 'Verify Email  '}}
                          component={ResetPasswordVerifyEmailScreen}/>
            <Stack.Screen name={'ResetPasswordScreen'}
                          options={{title: 'Reset Password  '}}
                          component={ResetPasswordScreen}/>
                <Stack.Screen name={'ProductDetails'}
                              options={{title: 'Product Details '}}
                              component={ProductDetailsScreen}/>
        </Stack.Navigator>
    );
}