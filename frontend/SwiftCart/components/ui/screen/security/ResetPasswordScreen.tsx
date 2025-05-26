import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from "react-native";
import {COLORS} from "@/constants/ColourPallete";
import {TextInput} from "react-native-paper";
import {useState} from "react";
import {Icon} from "react-native-paper";
import ChangePasswordScreen from "@/components/ui/screen/security/ChangePasswordScreen";

const logo = require('../../../../assets/images/logo/logo-sc.png');
export default function ResetPasswordScreen({navigation}:any){
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');

    const [passwordDisplayState, setPasswordDisplayState]= useState(false);


    return(
        <ScrollView style={styles.container}>
           <View style={styles.logoWrapper}>
               <Image source={logo} style={styles.logo} resizeMode={'contain'}/>
           </View>
            <View style={styles.inputOuter}>


                <View style={styles.formGroup}>
                    <TextInput
                        label="Password"
                        mode={'outlined'}
                        secureTextEntry={!passwordDisplayState}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        right={<TextInput.Icon onPress={()=>{
                            setPasswordDisplayState(!passwordDisplayState)
                        }} size={20} icon={passwordDisplayState?'eye':'eye-off'}/> }
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Confirm Password"
                        mode={'outlined'}
                        secureTextEntry={!passwordDisplayState}
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        right={<TextInput.Icon onPress={()=>{
                            setPasswordDisplayState(!passwordDisplayState)
                        }} size={20} icon={passwordDisplayState?'eye':'eye-off'}/> }
                    />
                </View>


                <TouchableOpacity
                    onPress={()=>navigation.navigate('Login')}
                    style={styles.loginButton}>
                    <Text style={styles.loginText}> Reset Password</Text>
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
    loginText:{
        color:COLORS.light,
    },
    loginButton:{
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