import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeMenuScreen from "@/components/ui/screen/home/HomeMenuScreen";
import HomeProductScreen from "@/components/ui/screen/home/HomeProductScreen";
import HomeBookmarkScreen from "@/components/ui/screen/home/HomeBookmarkScreen";
import HomePageScreen from "@/components/ui/screen/home/HomePageScreen";
import HomeCartScreen from "@/components/ui/screen/home/HomeCartScreen";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "@/constants/ColourPallete";
import {Image, Text, TouchableOpacity} from "react-native";
import LoginScreen from "@/components/ui/screen/security/LoginScreen";

const  logo = require('../../../assets/images/logo/logo-sc.png')
const Tab = createBottomTabNavigator();
export default function HomeBottomTabNavigation({navigation}:any){

    return(
        <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={({route, focused}:any)=>({
            tabBarIcon:({color,size})=>{
                let iconName;
                if(route.name==='Menu') iconName = focused? 'menu': 'menu';
                else if(route.name==='Cart')iconName = focused? 'cart': 'cart';
                else if(route.name==='Home')iconName = focused? 'home': 'home';
                else if(route.name==='Bookmarks')iconName = focused? 'heart': 'heart';
                else if(route.name==='Products')iconName = focused? 'grid': 'grid';
                //@ts-ignore
                return<Ionicons name={iconName} size={22} color={color}/>
            },
            tabBarActiveTintColor:COLORS.darkOrange,
            tabBarInactiveTintColor:COLORS.darkGray,

        })}>
            <Tab.Screen name={'Menu'} component={HomeMenuScreen}/>
            <Tab.Screen name={'Cart'} component={HomeCartScreen}/>
            <Tab.Screen name={'Home'}
                        component={HomePageScreen}
                        options={{
                            headerLeft:()=>(
                                <Image source={logo} resizeMode={'cover'}
                                style={{width:120, height:35, marginLeft:10}}
                                />

                            ),
                            headerTitle:'',
                            headerRight:()=>(
                                <TouchableOpacity
                                    onPress={()=>navigation.navigate('Login')}
                                style={{
                                    marginRight:10,
                                    width:120,
                                    backgroundColor:COLORS.darkOrange,
                                    borderRadius:3,
                                    height:35,
                                    alignItems:'center',
                                    justifyContent:'center',

                                }}
                                >
                                    <Text style={{color:COLORS.light}}> Admin Console</Text>
                                </TouchableOpacity>
                            )
                        }}


            />
            <Tab.Screen name={'Bookmarks'} component={HomeBookmarkScreen}/>
            <Tab.Screen name={'Products'} component={HomeProductScreen}/>

        </Tab.Navigator>
    )
}