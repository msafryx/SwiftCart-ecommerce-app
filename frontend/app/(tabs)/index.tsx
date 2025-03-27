import { Image, StyleSheet, Text, View, Platform } from 'react-native';
import {useState} from "react";
import SplashScreen from "@/components/ui/screen/SplashScreen";
import Dashboard from "@/components/ui/screen/Dashboard";
import StackNavigator from "@/app/navigation/stack-navigation/StackNavigator";


export default function HomeScreen() {
    const[isLoading, setIsLoading] = useState(true)
  return (
      <View style={styles.container}>
          {isLoading?(
                  <SplashScreen onFinish={()=>{setIsLoading(false)}}/>
              ):(
                  <StackNavigator/>
              )}
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
