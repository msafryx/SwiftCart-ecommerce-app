import {Text, StyleSheet, Animated, View, Image} from "react-native";
import {red} from "react-native-reanimated/lib/typescript/Colors";
import {useEffect, useRef} from "react";
import {COLORS} from "@/constants/ColourPallete";

export default function SplashScreen({onFinish}:any){
    const progress = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        Animated.timing(progress,{
            toValue:100,
            duration:5000,
            useNativeDriver:false
        }).start(()=>{
            onFinish();
        })
    }, [onFinish]);

    return(
        <View style = {styles.container}>
            <View style={styles.logoWrapper}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/images/logo/logo-sc.png')}
                    resizeMode={'contain'}/>
            </View>
            <Text>Shop Smarter, Move Faster</Text>
            <View style={styles.progressContainer}></View>
        </View>
    )
}

const styles = StyleSheet.create({

    progressContainer:
        {
            width:'80%',
            height:5,
            backgroundColor:COLORS.darkGray,
            overflow:'hidden',
            borderRadius:5,
            marginTop:10
        },
    logo:{
        height:60
        },
    logoWrapper:{

    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})