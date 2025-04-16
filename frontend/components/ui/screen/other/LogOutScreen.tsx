import {View, Text, StyleSheet} from "react-native";

export default function LogOutScreen(){
    return(
        <View style={styles.container}>
            <Text>Home Cart Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})