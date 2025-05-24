import {View, Text, StyleSheet, Image} from "react-native";
import {COLORS} from "@/constants/ColourPallete";

export default function ProductGridViewWidget(){
    return(
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image source={'https://www.castlecameras.co.uk/images/products/large/2221.jpg'}
                       style={styles.image} resizeMode={"contain"}/>
            </View>
            <View>
                <Text style={styles.name}>Nikon D750 DSLR Camera with 24-120mm VR Lens</Text>
                <Text style={styles.price}>LKR 150,000</Text>
                <Text style={styles.quantity}>QTY : 15</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    quantity:{
        textAlign:"right"
    },
    price:{
        fontWeight:'bold',
        fontSize:20,
        color:COLORS.darkOrange
    },
    name:{
        fontSize:20,
        lineHeight:20,
        marginTop:5
    },

    image:{
        width:'100%',
        aspectRatio:16/12,
    },
    imageView:{
        backgroundColor:COLORS.light,
        padding:3
    },

    container:{
        width:'100%',
        padding:8,
        backgroundColor:COLORS.lightGray,
        borderRadius:5,
        marginBottom:5

    }
})