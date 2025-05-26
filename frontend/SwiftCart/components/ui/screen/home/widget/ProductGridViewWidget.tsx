import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {COLORS} from "@/constants/ColourPallete";
import {Icon} from "react-native-paper";

export default function ProductGridViewWidget({navigation}:any){
    return(
        <TouchableOpacity
            onPress={()=>navigation.navigate('ProductDetails')}
            style={styles.container}>
            <View style={styles.imageView}>
                <TouchableOpacity style={styles.bookmarkButton}>
                    <Icon size={20} source={'heart-outline'} color={COLORS.light}/>
                </TouchableOpacity>
                <Image source={'https://www.castlecameras.co.uk/images/products/large/2221.jpg'}
                       style={styles.image} resizeMode={"contain"}/>
            </View>
            <View>
                <Text style={styles.name}>Nikon D750 DSLR Camera with 24-120mm VR Lens</Text>
                <Text style={styles.price}>LKR 150,000</Text>
                <Text style={styles.quantity}>QTY : 15</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bookmarkButton:{
        width:40,
        height:40,
        backgroundColor:COLORS.primary,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:10,
        top:10,
        zIndex:1
    },
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