import {View, Text, StyleSheet, ScrollView} from "react-native";
import {Searchbar} from "react-native-paper";
import {useState} from "react";
import DisplayTypeWidget from "@/components/ui/screen/share/DisplayTypeWidget";
import {COLORS} from "@/constants/ColourPallete";
import ProductGridViewWidget from "@/components/ui/screen/home/widget/ProductGridViewWidget";
import ProductListViewWidget from "@/components/ui/screen/home/widget/ProductListViewWidget";
import CartListViewWidget from "@/components/ui/screen/home/widget/CartListViewWidget";
import CartGridViewWidget from "@/components/ui/screen/home/widget/CartGridViewWidget";

export default function HomeCartScreen(){
    const [searchQuery, setSearchQuery] = useState('');
    const [isGridEnabled, setIsGridEnabled] = useState(true);

    return(
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <DisplayTypeWidget callBack ={(state:boolean)=>setIsGridEnabled(state)}/>

            {isGridEnabled?(
                <ScrollView>
                    <CartGridViewWidget/>

                </ScrollView>
            ):(
                <ScrollView>
                    <CartListViewWidget/>

                </ScrollView>
            )}

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