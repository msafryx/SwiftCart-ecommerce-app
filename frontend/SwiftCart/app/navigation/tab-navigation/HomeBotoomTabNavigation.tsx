import {Image,Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeMenuScreen from "@/components/ui/screen/home/HomeMenuScreen";
import HomeCartScreen from "@/components/ui/screen/home/HomeCartScreen";
import HomePageScreen from "@/components/ui/screen/home/HomePageScreen";
import HomeBookmarkScreen from "@/components/ui/screen/home/HomeBookmarkScreen";
import HomeProductsScreen from "@/components/ui/screen/home/HomeProductScreen";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "@/constants/ColourPallete";
const logo = require('../../../assets/images/logo/logo-sc.png');
const Tab = createBottomTabNavigator();
export default function HomeBottomTabNavigation({navigation}:any){
    return(
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={({route, focused}:any)=>({
                tabBarIcon:({color, size})=>{
                    let iconName;
                    if(route.name==='Menu') iconName = focused? 'menu':'menu';
                    else if(route.name==='Cart') iconName = focused? 'cart':'cart';
                    else if(route.name==='Home') iconName = focused? 'home':'home';
                    else if(route.name==='Bookmarks') iconName = focused? 'heart':'heart';
                    else if(route.name==='Products') iconName = focused? 'grid':'grid';
                    // @ts-ignore
                    return <Ionicons name={iconName} size={22} color={color}/>
                },
                tabBarActiveTintColor:COLORS.darkOrange,
                tabBarInactiveTintColor:COLORS.darkGray
            })}
        >
            <Tab.Screen name={'Menu'} component={HomeMenuScreen}/>
            <Tab.Screen name={'Cart'} component={HomeCartScreen}/>
            <Tab.Screen name={'Home'}
                        component={HomePageScreen}
                        options={{

                            headerLeft:()=>(
                                <Image source={logo} resizeMode={'contain'}
                                       style={{width:130, height:40, marginLeft:10}}
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
                                        justifyContent:'center'
                                    }}
                                >
                                    <Text style={{color:COLORS.light}}>Admin Console</Text>
                                </TouchableOpacity>
                            )
                        }}

            />
            <Tab.Screen name={'Bookmarks'} component={HomeBookmarkScreen}/>
            <Tab.Screen name={'Products'} component={HomeProductsScreen}/>
        </Tab.Navigator>
    )
}