import {View, Text, StyleSheet, ScrollView, Image} from "react-native";
import {COLORS} from "@/constants/ColourPallete";
import {TextInput} from "react-native-paper";
import {useState} from "react";

const logo = require('../../../../assets/images/logo/logo-sc.png');
export default function LoginScreen(){
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    return(
        <ScrollView style={styles.container}>
           <View style={styles.logoWrapper}>
               <Image source={logo} style={styles.logo} resizeMode={'contain'}/>
           </View>
            <View style={styles.inputOuter}>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Root Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>

                <View style={styles.formGroup}>
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    formGroup:{
        marginBottom:10
    },
    inputOuter:{
        marginTop:50
    },
    logo:{
        width:200,
        height:60
    },
    logoWrapper:{
        alignItems:'center',
        margin:30,
        marginTop:50

    },
    container:{
        flex:1,
        padding:20,
        backgroundColor:COLORS.light
    }
})