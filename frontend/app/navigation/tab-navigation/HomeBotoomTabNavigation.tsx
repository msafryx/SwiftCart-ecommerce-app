import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeMenuScreen from "@/components/ui/screen/home/HomeMenuScreen";
import HomeProductScreen from "@/components/ui/screen/home/HomeProductScreen";
import HomeBookmarkScreen from "@/components/ui/screen/home/HomeBookmarkScreen";
import HomePageScreen from "@/components/ui/screen/home/HomePageScreen";
import HomeCartScreen from "@/components/ui/screen/home/HomeCartScreen";

const Tab = createBottomTabNavigator();
export default function HomeBotoomTabNavigation({navigation}:any){

    return(
        <Tab.Navigator>
            <Tab.Screen name={'Menu'} component={HomeMenuScreen}/>
            <Tab.Screen name={'Cart'} component={HomeCartScreen}/>
            <Tab.Screen name={'Home'} component={HomePageScreen}/>
            <Tab.Screen name={'Bookmarks'} component={HomeBookmarkScreen}/>
            <Tab.Screen name={'Products'} component={HomeProductScreen}/>

        </Tab.Navigator>
    )
}