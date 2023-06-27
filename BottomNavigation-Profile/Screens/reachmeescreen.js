import { StyleSheet, Text, View, TextInput} from 'react-native'
import React, {useState} from 'react'

const reachmescreen = () => {
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [linkedin, setlinkedin] = useState ('');

  const email1 = (text) => {
    setemail (text);
  };

  const phone1 = (text) => {
    setphone (text);
  };

  const linkedin1 = (text) => {
    setlinkedin (text);
  };

  return (
    <View style = {styles.container}>
      <Text style={styles.reach}>Reach Me!</Text><br/><br/><br/>
      <Text style = {styles.label}> E-Mail:</Text>
    <TextInput
    style={styles.input}
    value = {email}
    onChangeText= {email1}
    />

   <Text style = {styles.label}> Phone:</Text>
    <TextInput
    style={styles.input}
    value = {phone}
    onChangeText= {phone1}
    />

    <Text style = {styles.label}> Linkedin:</Text>
    <TextInput
    style={styles.input}
    value = {linkedin}
    onChangeText= {linkedin1}
    />

    </View>
  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'skyblue',
  },

  label:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
 reach:{
  fontSize: 30,
  fontWeight: 'bold',
  marginTop: 50,
 },
});

export default reachmescreen;