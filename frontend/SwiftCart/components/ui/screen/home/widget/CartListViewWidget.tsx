import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {COLORS} from "@/constants/ColourPallete";
import {Icon} from "react-native-paper";
import {useState} from "react";

export default function CartListViewWidget(){
    const[qty,setQty]=useState(0) ;
    const changeQty=(value:number)=>{
        if(value<=0){
            return;
        }
        setQty(value);
    }
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageView}>
                <TouchableOpacity style={styles.bookmarkButton}>
                    <Icon size={20} source={'heart-outline'} color={COLORS.light}/>
                </TouchableOpacity>
                <Image source={'https://www.castlecameras.co.uk/images/products/large/2221.jpg'}
                       style={styles.image} resizeMode={"contain"}/>
            </View>
            <View style={{flex:1, padding:5}}>
                <Text style={styles.name}>Nikon D750 DSLR Camera with 24...</Text>
                <Text style={styles.price}>LKR 150,000</Text>
                <View style={styles.buttonBar}>
                    <TouchableOpacity
                        onPress={()=>changeQty(qty-1)}
                        style={styles.button}>
                        <Icon size={20} source={'minus'} color={(COLORS.primary)}/>
                    </TouchableOpacity>

                    <Text style={{fontWeight:'bold',marginLeft:10, marginRight:10}}>{qty}</Text>

                    <TouchableOpacity
                        onPress={()=>changeQty(qty+1)}
                        style={styles.button}>
                        <Icon size={20} source={'plus'} color={(COLORS.primary)}/>
                    </TouchableOpacity>

                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBar:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    button:{
        width:35,
        height:35,
        borderRadius:50,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:COLORS.primary

    },
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
        height:'100%'
    },
    imageView:{
        width:150,
        height:110,
        backgroundColor:COLORS.light,
        padding:3
    },

    container:{
        width:'100%',
        padding:8,
        backgroundColor:COLORS.lightGray,
        borderRadius:5,
        marginBottom:5,
        flexDirection:'row'

    }
})