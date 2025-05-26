import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from "react-native";
import {COLORS} from "@/constants/ColourPallete";
import {TextInput} from "react-native-paper";
import {useState} from "react";
import {Icon} from "react-native-paper";

const logo = require('../../../../assets/images/logo/logo-sc.png');
export default function ResetPasswordVerifyEmailScreen({navigation}:any){
    const [otp, setOtp]= useState('');



    return(
        <ScrollView style={styles.container}>
           <View style={styles.logoWrapper}>
               <Image source={logo} style={styles.logo} resizeMode={'contain'}/>
           </View>
            <View style={styles.inputOuter}>

                <View style={styles.formGroup}>
                    <TextInput
                        label="OTP"
                        mode={'outlined'}
                        value={otp}
                        keyboardType={'decimal-pad'}
                        onChangeText={text => setOtp(text)}
                    />
                </View>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('ChangePasswordScreen')}
                    style={styles.forgetPasswordButton}>
                    <Text style={styles.forgetPasswordText}> Change email</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.forgetPasswordButton}>
                    <Text style={styles.forgetPasswordText}> (30) Resend email</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={()=>navigation.navigate('ResetPasswordVerifyEmailScreen')}
                    style={styles.signupButton}>
                    <Text style={styles.signupText}> Verify</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    iconOuter:{
        backgroundColor:COLORS.darkGray,
        width:50,
        height:50,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    socialLoginWrapper:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:10,
        justifyContent:'space-around'

    },
    separateText:{
        textAlign:'center',
        marginTop:30
    },
    signupText:{
        color:COLORS.light,
    },
    signupButton:{
        backgroundColor:COLORS.blue,
        height:50,
        marginTop:30,
        borderRadius:3,
        alignItems:'center',
        justifyContent:"center"
    },
    forgetPasswordText:{
        color:COLORS.blue,
        textDecorationLine:"underline"
    },
    forgetPasswordButton:{
        alignItems:'flex-end'
    },
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