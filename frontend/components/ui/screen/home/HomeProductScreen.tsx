import {View, Text, StyleSheet} from "react-native";
import {Searchbar} from "react-native-paper";
import {useState} from "react";
import DisplayTypeWidget from "@/components/ui/screen/share/DisplayTypeWidget";
import {COLORS} from "@/constants/ColourPallete";

export default function HomeProductScreen(){
    const [searchQuery, setSearchQuery] = useState('')
    return(
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <DisplayTypeWidget>

            </DisplayTypeWidget>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.light,
        flex:1,
        padding:10
    }
})