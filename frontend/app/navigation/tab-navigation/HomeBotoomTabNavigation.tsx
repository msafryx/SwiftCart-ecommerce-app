import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeMenuScreen from "@/components/ui/screen/home/HomeMenuScreen";
import HomeProductScreen from "@/components/ui/screen/home/HomeProductScreen";
import HomeBookmarkScreen from "@/components/ui/screen/home/HomeBookmarkScreen";
import HomePageScreen from "@/components/ui/screen/home/HomePageScreen";
import HomeCartScreen from "@/components/ui/screen/home/HomeCartScreen";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "@/constants/ColourPallete";

const Tab = createBottomTabNavigator();
export default function HomeBottomTabNavigation({navigation}:any){

    return(
        <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={({route, focused}:any)=>({
            tabBarIcon:({color,size})=>{
                let iconName;
                if(route.name==='Menu') iconName = focused? 'menu': 'menu-outline';
                else if(route.name==='Cart')iconName = focused? 'cart': 'cart-outline';
                else if(route.name==='Home')iconName = focused? 'home': 'home-outline';
                else if(route.name==='Bookmarks')iconName = focused? 'heart': 'heart-outline';
                else if(route.name==='Products')iconName = focused? 'grid': 'grid-outline';
                //@ts-ignore
                return<Ionicons name={iconName} size={22} color={color}/>
            },
            tabBarActiveTintColor:COLORS.darkOrange,
            tabBarInactiveTintColor:COLORS.darkGray,

        })}>
            <Tab.Screen name={'Menu'} component={HomeMenuScreen}/>
            <Tab.Screen name={'Cart'} component={HomeCartScreen}/>
            <Tab.Screen name={'Home'} component={HomePageScreen}/>
            <Tab.Screen name={'Bookmarks'} component={HomeBookmarkScreen}/>
            <Tab.Screen name={'Products'} component={HomeProductScreen}/>

        </Tab.Navigator>
    )
}