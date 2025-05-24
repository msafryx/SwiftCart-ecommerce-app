import {Text, StyleSheet, Animated, View, Image} from "react-native";
import {useEffect, useRef} from "react";
import {COLORS} from "@/constants/ColourPallete";
import appJson from '../../../app.json';

interface SplashScreenProps {
    onFinish?: () => void
}

interface SplashScreenProps {
    onFinish?: () => void
}

interface SplashScreenProps {
    onFinish?: () => void
}

interface SplashScreenProps {
    onFinish?: () => void
}

interface SplashScreenProps {
    onFinish?: () => void
}

interface SplashScreenProps {
    onFinish?: () => void
}

interface SplashScreenProps {
    onFinish?: boolean
}

export default function SplashScreen({onFinish}: any) {
    const progress = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(progress, {
            toValue: 100,
            duration: 5000,
            useNativeDriver: false
        }).start(() => {
            onFinish();
        })
    }, [onFinish]);

    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/images/logo/logo-sc.png')}
                    resizeMode={'contain'}/>
            </View>
            <Text>Shop Smarter, Move Faster</Text>
            <View style={styles.progressContainer}>
                <Animated.View
                    style={[styles.progressBar,
                        {width: progress.interpolate({inputRange: [0, 100], outputRange: ['0%', '100%']})}]}/>
            </View>
            <View style={styles.bottom}>
                <Text> Version : {appJson.expo.version}</Text>
                <Text> DevSaf</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    bottom: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        padding: 10,
        justifyContent: "space-between"
    },
    progressBar:
        {
            backgroundColor: COLORS.darkOrange,
            borderRadius: 5,
            height: '100%'
        },
    progressContainer:
        {
            width: '80%',
            height: 5,
            backgroundColor: COLORS.darkGray,
            overflow: 'hidden',
            borderRadius: 5,
            marginTop: 10
        },
    logo: {
        height: 60
    },
    logoWrapper: {},
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})