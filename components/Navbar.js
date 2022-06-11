import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View> 
    <Text style={styles.text}
    >devfinder</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        marginHorizontal: 30,
        marginVertical: 30,
        fontWeight: 'bold',
    }
})
export default Navbar