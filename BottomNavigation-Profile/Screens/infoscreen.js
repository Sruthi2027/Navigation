import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function infoscreen() {
  return (
    <View style = {styles.background}> <br/><br/>
    <Text style = { styles.title1}> Basic information:</Text> <br/><br/>
      <Text style = { styles.title}>Date of Birth:     xxx </Text> <br/>
      <Text style = { styles.title}>Hobbies:           yyy</Text> <br/>
      <Text style = { styles.title}>Objectives:       zzz</Text> <br/>
      <Text style = { styles.title}>Address:           qqq</Text> <br/>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize: 14,
},

title1:{
  fontSize: 20,
  fontWeight: 'bold',
},

background: {
  backgroundColor: 'lightyellow',
  padding: 170,
}
})