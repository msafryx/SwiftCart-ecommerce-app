import {View, Text, StyleSheet, ScrollView} from "react-native";
import {Searchbar} from "react-native-paper";
import {useState} from "react";
import DisplayTypeWidget from "@/components/ui/screen/share/DisplayTypeWidget";
import {COLORS} from "@/constants/ColourPallete";
import ProductGridViewWidget from "@/components/ui/screen/home/widget/ProductGridViewWidget";

export default function HomeProductScreen(){
    const [searchQuery, setSearchQuery] = useState('');
    const [isGridEnabled, setIsGridEnabled] = useState(true);
    const manageGridView=({state}:any)=>{
        setIsGridEnabled(state);
        console.log(isGridEnabled);
    }
    return(
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <DisplayTypeWidget callBack={manageGridView}/>

            {isGridEnabled?(
                <ScrollView>
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
                </ScrollView>
            ):(
                <ScrollView>
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
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