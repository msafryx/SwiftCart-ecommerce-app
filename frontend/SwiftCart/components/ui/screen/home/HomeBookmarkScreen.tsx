import {View, Text, StyleSheet} from "react-native";
import {COLORS} from "@/constants/ColourPallete";

export default function HomeBookmarkScreen(){
    return(
        <View style={styles.container}>
            <Text>Home Bookmark Screen</Text>
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