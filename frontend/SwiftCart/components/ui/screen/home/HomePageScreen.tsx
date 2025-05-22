import {View, Text, StyleSheet} from "react-native";
import {COLORS} from "@/constants/ColourPallete";

export default function HomePageScreen(){
    return(
        <View style={styles.container}>
            <Text>Home Page Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.light,
        alignItems:'center',
        justifyContent:'center'
    }
})