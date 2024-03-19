import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput, Button, ToastAndroid, Alert, Image } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [prn, setPRN] = useState('');
  const [submit, setSubmit] = useState(false);

  function onPressHandler() {
    console.log('Button Pressed');
    if (name.length < 3) {
      Alert.alert('Enter the Correct Details !!');
    } else {
      ToastAndroid.show(`Hi ${name}`, ToastAndroid.SHORT);
      setSubmit(true);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://img.freepik.com/free-vector/beautiful-decorative-soft-colorful-watercolor-texture-background_1055-14290.jpg' }} style={styles.image}>
        <View>
          <Text style={styles.heading}>Register Here !!</Text>
          
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            value={name}
            onChangeText={text => setName(text)}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          
          <Text style={styles.label}>PRN</Text>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            value={prn}
            onChangeText={text => setPRN(text)}
            keyboardType='number-pad'
          />
          <View style={styles.button}>
            <Button title="Submit" onPress={onPressHandler}/>
          </View>


        </View>
        
        {submit ? (
          <View style={styles.lowerDisplay}>
            <Image source={require('./assets/favicon.png')} />
            <Text style={styles.yourName}>Name: {name}</Text>
            <Text style={styles.yourName}>Email: {email}</Text>
            <Text style={styles.yourName}>PRN: {prn}</Text>
          </View>
        ) : null}

      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    width: 70,
    alignSelf: 'center',
    opacity: 1,
  },

  heading: {
    marginTop: 50,
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
  },

  label: {
    textAlign: 'left',
    paddingLeft: 10,
    color: 'black',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  yourName: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },

  lowerDisplay: {
    paddingTop: 20,
    alignItems: 'center',
  }

});
