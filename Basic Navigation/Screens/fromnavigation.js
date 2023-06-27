import React from "react";
import {Button,  View, Text} from "react-native";
import { StyleSheet } from "react-native-web";

export default function fromnavigation({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "left", justifyContent: "left", fontSize: 25 }}>
      <Text style = {styles.text}>  Hey! This is your from Navigation screen </Text><br/><br/>
      <Button
     
        title="Press Me to Navigate!"
        backgroundColor= "black"
        color= "purple"
        onPress={() => navigation.navigate("tonavigation")}
      />
    </View>
  );
};

const styles = StyleSheet.create({

    text:{
        fontSize: 25,
    },
})
