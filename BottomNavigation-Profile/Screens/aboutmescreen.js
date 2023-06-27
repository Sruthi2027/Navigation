import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function aboutmescreen() {
  return (
    <View style = {styles.backgroundColor}>
      <Text style = { styles.title}> Projects:</Text> <br/><br/>
      <Text style = { styles.content}> *** Builded a Resume using HTML and CSS.</Text> <br/><br/>
      <Text style = { styles.content}> *** Builded a image gallery through React Native.</Text> <br/><br/>
      <Text style = { styles.content}> *** Builded a newspaper application using React Native.</Text> <br/><br/>
      <Text style = { styles.content}> *** Builded a chat application through React Native.</Text> <br/><br/>


    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    fontWeight: 'bold',
    fontSize: 23,
    flexDirection: 'center',
  
  },
 backgroundColor:{
  backgroundColor: 'pink',
  padding: 150,
 }
})