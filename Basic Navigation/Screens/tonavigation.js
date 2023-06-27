import React from "react";
import {  View, Text } from "react-native";
import { StyleSheet } from "react-native";


export default function tonavigation() {
  return (
    <View style={{
         flex: 3, alignItems: "Left", justifyContent: "right", textAlignVertical: "right" }}>
      <Text style={styles.text}> You have successfully navigated!  </Text>
    </View>
  );
};

const styles =StyleSheet.create({

    text:{
        fontSize: 25,
    },
})
