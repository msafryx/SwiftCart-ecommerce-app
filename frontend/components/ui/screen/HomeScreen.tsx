import {Text, StyleSheet} from "react-native";
import {red} from "react-native-reanimated/lib/typescript/Colors";

export default function HomeScreen(){
    return(
        <Text style = {styles.homeText}>
            Home Page
        </Text>
    )
}

const styles = StyleSheet.create({
    homeText:{
        color:'red'
    }
})