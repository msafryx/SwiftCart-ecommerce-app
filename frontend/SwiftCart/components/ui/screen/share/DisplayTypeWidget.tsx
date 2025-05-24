import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Icon} from "react-native-paper";
import {COLORS} from "@/constants/ColourPallete";
import {useState} from "react";


export default function DisplayTypeWidget({callBack}: any) {
    const [gridState, setGridState] = useState(true)
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setGridState(true);
                    callBack(true);
                }}
                style={{
                    ...styles.button,
                    backgroundColor: gridState ? COLORS.light : COLORS.light,
                    borderColor: gridState ? COLORS.darkOrange : COLORS.darkGray
                }}>
                <Icon size={21} source={'grid'} color={gridState ? COLORS.darkOrange : COLORS.darkGray}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setGridState(false);
                    callBack(false);
                }}
                style={{
                    ...styles.button,
                    backgroundColor: gridState ? COLORS.light : COLORS.light,
                    borderColor: gridState ? COLORS.darkGray : COLORS.darkOrange
                }}>
                <Icon size={26} source={'menu'} color={gridState ? COLORS.darkGray : COLORS.darkOrange}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.darkGray,
        borderRadius: 3

    },
    container: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 10
    }
})