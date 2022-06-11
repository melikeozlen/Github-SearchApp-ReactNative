import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Welcome = () => {
  return (
    <View style={{marginVertical:250}}> 
    <Text style={styles.text}
    >
    Welcome to 
    </Text>
    <Text style={styles.text}
    >
    My First 
    </Text>
    <Text style={styles.text}
    >
     React Native App
    </Text>
    
    </View>
    
  )
}

const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
export default Welcome