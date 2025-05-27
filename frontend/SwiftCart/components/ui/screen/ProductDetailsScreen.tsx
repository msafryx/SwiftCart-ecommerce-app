import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import {COLORS} from "@/constants/ColourPallete";
import {Icon} from "react-native-paper";


export default function ProductDetailsScreen(){
    const productImages=[
        {uri:'https://discount-cloudfront.service.prod.totum.com/Images/Brand/1182/Library/18,746/MOBILE_PHONES_DIRECT_WEB_IPHONE13_1920X1080_SEP23.jpg'},
        {uri:'https://media.ldlc.com/ld/products/00/05/88/62/LD0005886202_1.jpg'},
        {uri:'https://th.bing.com/th/id/R.929e4905e29484905b2befbf9ae080df?rik=bk%2b3rzmiGcgHQw&pid=ImgRaw&r=0'}
    ]
    const [primaryImage , setPrimaryImage] = useState(productImages[0].uri);
    const [status , setStatus] = useState(true);

    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.imageBackground}>
                    <Image source={{uri:primaryImage}}
                           style={styles.image} resizeMode={'contain'}/>
                </View>
                <View style={styles.productImageList}>
                    {productImages.map((item, index)=>(
                        <TouchableOpacity
                            onPress={()=>setPrimaryImage(item.uri)}
                            key={index} style={{width:80, height:60, borderWidth:1, borderRadius:5}}>
                            <Image source={{uri:item.uri}}
                                   style={styles.displayImage} resizeMode={'contain'}/>
                        </TouchableOpacity>
                    ))}

                </View>
            </View>
            <View style={{}}>
                <Text style={{fontWeight:'bold', fontSize:20, marginTop:15}}>Apple iPhone 13 128GB | MySoftlogic.lk</Text>
                <Text style={{marginTop:10}}>iPhone 13 5G smartphone offers Super Retina XDR OLED display with Dolby Vision HDR and IP68 rated water or dust resistant protection.</Text>

                <View style={{marginTop:10, flexDirection:"row"}}>
                    <Text style={{color:COLORS.darkOrange,fontWeight:'bold',fontSize:15, marginRight:10 }}>2500 UAD</Text>
                    <Text style={{color:COLORS.darkOrange,fontWeight:'bold',fontSize:15,textDecorationLine:'line-through' }}>2900 UAD</Text>

                </View>
            </View>
            <View style={{marginTop:20, flexDirection:"row",justifyContent:'flex-end'}}>
                <TouchableOpacity style={{...styles.button, backgroundColor:COLORS.primary, marginRight:10}}>
                    <Icon size={20} source={'cart'} color={COLORS.light}/>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.button, backgroundColor:COLORS.blue}}>
                    <Text style={{color:COLORS.light}}>Buy Now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tab}>
                <TouchableOpacity
                    onPress={()=>setStatus(true)}
                    style={{...styles.tabButton, backgroundColor:status?COLORS.primary:COLORS.light}}>
                    <Text style={{color:status?COLORS.light:COLORS.primary}}>Reviews</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>setStatus(false)}
                    style={{...styles.tabButton, backgroundColor:status?COLORS.light:COLORS.primary}}>
                    <Text style={{color:status?COLORS.primary:COLORS.light}}>Recommended</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabButton:{
        justifyContent:'center',
        alignItems:'center',
        height:35,
        width:120
    },
    tab:{
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:COLORS.primary,
        marginBottom:20,
        marginTop:20,
        flexDirection:'row'
    },
    button:{
        width:120,
        height:35,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center"

    },
    displayImage:{
        width:'100%',
        height:'100%'
    },
    productImageList:{
        width:'100%',
        borderBottomWidth:1,
        marginTop:10,
        height:80,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        height:200
    },
    imageBackground:{
        backgroundColor:COLORS.darkGray
    },
    top:{
        width:'100%',
    },
    container:{
        backgroundColor:COLORS.light,
        flex:1,
        padding:10,
    }
})