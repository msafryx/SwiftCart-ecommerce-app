import {View, Text, StyleSheet, ScrollView} from "react-native";
import {Searchbar} from "react-native-paper";
import {useState} from "react";
import DisplayTypeWidget from "@/components/ui/screen/share/DisplayTypeWidget";
import {COLORS} from "@/constants/ColourPallete";
import ProductGridViewWidget from "@/components/ui/screen/home/widget/ProductGridViewWidget";
import ProductListViewWidget from "@/components/ui/screen/home/widget/ProductListViewWidget";

export default function HomeBookMarkScreen(){
    const [searchQuery, setSearchQuery] = useState('');
    const [isGridEnabled, setIsGridEnabled] = useState(true);

    return(
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <DisplayTypeWidget
                callBack ={(state:boolean)=>(state)}/>

            {isGridEnabled?(
                <ScrollView>
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
                </ScrollView>
            ):(
                <ScrollView>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
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