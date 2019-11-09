import React from 'react';
import {  
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput ,
  html,
}from 'react-native';


export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.hello2}>Hello, world</Text>
      <Text>Hello, world</Text>
      <Button
          title="Press me"
          onPress={() => Alert.alert(inputValue)}
        />
        
        <TextInput
      onChange={ this.handleChange }
      style={{ width: 200, height:20, borderColor: 'white', borderWidth: 1 }}
    />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E53C8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello2:{  
    fontSize: 20, 
    color:'#DCDEE9',
  },
});
