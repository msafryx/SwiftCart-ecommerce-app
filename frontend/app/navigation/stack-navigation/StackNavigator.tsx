import {createStackNavigator} from '@react-navigation/stack'
import HomeBottomTabNavigation from "@/app/navigation/tab-navigation/HomeBotoomTabNavigation";
const Stack = createStackNavigator();
export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Process'}
                          options={{headerLeft:()=>null, headerShown:false}}
                          component={HomeBottomTabNavigation}/>
        </Stack.Navigator>
    )
}