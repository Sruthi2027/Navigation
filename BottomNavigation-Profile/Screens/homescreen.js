import { StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-web'

const DATA = [
  {
    id: 'a',
    title: 'HTML',
  },
  {
    id: 'b',
    title: 'CSS',
  },
  {
    id: 'c',
    title: 'React Native',
  },
  {
    id: 'd',
    title: 'Javascript'
  }, 
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function HomeScreen () {
  return (
    
    <View style = {styles.container}>
      <Text style= {styles.open}> OPEN TO WORK!</Text><br/>
      <Text style = {styles.open1}>Name                   :  aaa</Text> <br/><br/>
      <Text style = {styles.open1}>Year of passout    : bbbb</Text><br/><br/>
      <Text style = {styles.open1}>Degree                 :  cccc</Text><br/><br/>
      <Text style = {styles.open1}>Course                 :  ddd.</Text> <br/><br/>
     
    </View>
    
  );
 }

const App = () => {
  return (
    <SafeAreaView style={styles.container2}>
       <HomeScreen /><br/><br/>
       <Text style = {styles.Text}> Skills: </Text> <br/>
      <FlatList
        data={DATA} 
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        fontWeight: 'bold',
        paddingHorizontal: 50,
        paddingVertical: 5,
        backgroundColor: 'lightgreen',
        marginRight: 0,
    },

    container2: {
   
      paddingHorizontal: 170,
      paddingVertical: 170,
      backgroundColor: 'pink',
    },
    item: {
      backgroundColor: 'skyblue',
      padding: 17,
      marginVertical: 4,
      marginHorizontal: 4,
    },
    Text: {
      fontWeight: 'bold',
    },
    open: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 24,
    },
    open1: {
      fontWeight: 'bold',
    }
  })

export default App;
