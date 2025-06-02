import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {COLORS} from "@/constants/ColourPallete";
import {Icon} from "react-native-paper";
import {use, useState} from "react";

export default function ReviewWidget(){

    return(
        <View style={{backgroundColor:COLORS.gray, padding:5,borderRadius:3, marginBottom:5 }}>
            <Text style={{textAlign:'justify'}}>
                Lorem ipsum dolor sit amet, consequatur deleniti doloremque facere id itaque obcaecati quasi quidem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ducimus enim est explicabo libero provident quibusdam! Ab adipisci, dolorum eligendi
                ex iure.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})